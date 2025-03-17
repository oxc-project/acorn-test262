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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
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
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
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
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "name": "f2",
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
          "start": 41,
          "end": 45,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 45,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 44,
              "end": 45,
              "typeName": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "name": "X",
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
          "start": 47,
          "end": 51,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "X",
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "X",
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
            "start": 38,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "X",
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
        "start": 52,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 54,
          "end": 55,
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 112,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 112,
                "body": []
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 101,
                "end": 107,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 102,
                    "end": 103,
                    "name": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "name": "x",
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
                    "start": 105,
                    "end": 106,
                    "name": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "name": "x",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 126,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 164,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 137,
                  "name": "a",
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
                        "name": "X",
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
                  "start": 139,
                  "end": 143,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "name": "X",
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 126,
                "end": 132,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 127,
                    "end": 128,
                    "name": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "name": "X",
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
                    "start": 130,
                    "end": 131,
                    "name": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "name": "X",
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
                "start": 144,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 146,
                  "end": 147,
                  "typeName": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "name": "X",
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 82,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "X",
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
            "start": 84,
            "end": 85,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "X",
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
      "start": 168,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 179,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 180,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "name": "X",
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
            "start": 183,
            "end": 184,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "X",
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
        "start": 186,
        "end": 233,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 192,
            "end": 202,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 193,
              "end": 199,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 194,
                  "end": 195,
                  "name": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "name": "X",
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
                  "start": 197,
                  "end": 198,
                  "name": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "name": "X",
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
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 207,
            "end": 231,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 209,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 209,
              "end": 215,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 210,
                  "end": 211,
                  "name": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "X",
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
                  "start": 213,
                  "end": 214,
                  "name": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "name": "X",
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
                "start": 216,
                "end": 220,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 217,
                  "end": 220,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 219,
                    "end": 220,
                    "typeName": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "name": "X",
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
                "start": 222,
                "end": 226,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 223,
                  "end": 226,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 225,
                    "end": 226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "name": "X",
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
              "start": 227,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 230,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "name": "X",
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
      "start": 235,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 252,
                  "end": 273,
                  "id": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 271,
                    "end": 273,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 262,
                    "end": 268,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 263,
                        "end": 264,
                        "name": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "name": "X",
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
                        "start": 266,
                        "end": 267,
                        "name": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 267,
                          "name": "X",
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
              },
              {
                "type": "Property",
                "start": 279,
                "end": 331,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 282,
                  "end": 331,
                  "id": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 293,
                    "name": "f2",
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
                      "start": 300,
                      "end": 304,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 301,
                        "end": 304,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 303,
                          "end": 304,
                          "typeName": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 304,
                            "name": "X",
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
                      "start": 306,
                      "end": 310,
                      "name": "b",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 307,
                        "end": 310,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 309,
                          "end": 310,
                          "typeName": {
                            "type": "Identifier",
                            "start": 309,
                            "end": 310,
                            "name": "X",
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
                          "value": null,
                          "raw": "null"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 293,
                    "end": 299,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 294,
                        "end": 295,
                        "name": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "name": "X",
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
                        "start": 297,
                        "end": 298,
                        "name": {
                          "type": "Identifier",
                          "start": 297,
                          "end": 298,
                          "name": "X",
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
                    "start": 311,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 313,
                      "end": 314,
                      "typeName": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 314,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
