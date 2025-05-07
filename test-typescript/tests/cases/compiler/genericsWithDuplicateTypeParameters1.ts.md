__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 333,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 22,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 72,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 58,
            "end": 70,
            "argument": {
              "type": "Literal",
              "start": 65,
              "end": 69,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 45,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 44,
              "end": 45,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 47,
          "end": 51,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 54,
          "end": 55,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 39,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 112,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 112,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 101,
                "end": 107,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 102,
                    "end": 103,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 105,
                    "end": 106,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 164,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 126,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 164,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 150,
                    "end": 162,
                    "argument": {
                      "type": "Literal",
                      "start": 157,
                      "end": 161,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
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
                  "start": 133,
                  "end": 137,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 137,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 143,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 143,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 146,
                  "end": 147,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 126,
                "end": 132,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 127,
                    "end": 128,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 130,
                    "end": 131,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 82,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 233,
      "body": {
        "type": "TSInterfaceBody",
        "start": 186,
        "end": 233,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 192,
            "end": 202,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 193,
              "end": 199,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 194,
                  "end": 195,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 197,
                  "end": 198,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 207,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 209,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 220,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 217,
                  "end": 220,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 219,
                    "end": 220,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 222,
                "end": 226,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 223,
                  "end": 226,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 225,
                    "end": 226,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "X",
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
              "start": 227,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 230,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 209,
              "end": 215,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 210,
                  "end": 211,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 213,
                  "end": 214,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 179,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 180,
            "end": 181,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 184,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 243,
            "end": 333,
            "properties": [
              {
                "type": "Property",
                "start": 249,
                "end": 273,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 252,
                  "end": 273,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 271,
                    "end": 273,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 262,
                    "end": 268,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 263,
                        "end": 264,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 266,
                        "end": 267,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              },
              {
                "type": "Property",
                "start": 279,
                "end": 331,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 282,
                  "end": 331,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 315,
                    "end": 331,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 317,
                        "end": 329,
                        "argument": {
                          "type": "Literal",
                          "start": 324,
                          "end": 328,
                          "raw": "null",
                          "value": null,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 293,
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 300,
                      "end": 304,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 301,
                        "end": 304,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 303,
                          "end": 304,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 304,
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 306,
                      "end": 310,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 307,
                        "end": 310,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 309,
                          "end": 310,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 309,
                            "end": 310,
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 311,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 313,
                      "end": 314,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 314,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 293,
                    "end": 299,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 294,
                        "end": 295,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 297,
                        "end": 298,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 297,
                          "end": 298,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
