genericInstantiationEquivalentToObjectLiteral.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "decorators": [],
              "name": "first",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 34,
                  "decorators": [],
                  "name": "T1",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 47,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 42,
              "decorators": [],
              "name": "second",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 46,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 46,
                  "decorators": [],
                  "name": "T2",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Pair",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 17,
              "decorators": [],
              "name": "T1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "T2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 77,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 61,
                  "end": 77,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 62,
                      "end": 68
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 70,
                      "end": 76
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 61,
                  "decorators": [],
                  "name": "Pair",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 119,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 85,
                "end": 119,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 87,
                    "end": 101,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 92,
                      "decorators": [],
                      "name": "first",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 102,
                    "end": 117,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 108,
                      "decorators": [],
                      "name": "second",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 134,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 133,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 176,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 174,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 174,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 168,
                "end": 174,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 169,
                    "end": 170,
                    "typeName": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 173,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 168,
                "decorators": [],
                "name": "Pair",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 154,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 156,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 158,
            "end": 159,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 177,
      "end": 232,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 196,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 203,
          "end": 230,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 206,
              "end": 230,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 208,
                  "end": 217,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 213,
                    "decorators": [],
                    "name": "first",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 213,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 215,
                      "end": 216,
                      "typeName": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 216,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 218,
                  "end": 228,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 224,
                    "decorators": [],
                    "name": "second",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
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
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 198,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 239,
      "expression": {
        "type": "CallExpression",
        "start": 234,
        "end": 238,
        "arguments": [
          {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 245,
      "expression": {
        "type": "CallExpression",
        "start": 240,
        "end": 244,
        "arguments": [
          {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 240,
          "end": 241,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 252,
      "expression": {
        "type": "CallExpression",
        "start": 246,
        "end": 251,
        "arguments": [
          {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 246,
          "end": 248,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 259,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 258,
        "arguments": [
          {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 255,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
