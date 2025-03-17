__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 23,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 20,
                "end": 23,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 20,
                  "end": 21,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 21,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 51,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 48,
                "end": 51,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 48,
                  "end": 49,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 85,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 75,
            "end": 83,
            "argument": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 67,
          "end": 71,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 71,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 71,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 85,
      "end": 86
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 96,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 100,
        "arguments": [
          {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
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
      "type": "TSInterfaceDeclaration",
      "start": 103,
      "end": 129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 129,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 122,
            "end": 127,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 126,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 126,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 113,
        "end": 115,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 131,
      "end": 157,
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 157,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 155,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 154,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 154,
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 141,
        "end": 143,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 159,
      "end": 185,
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 178,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 182,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 182,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 187,
      "end": 217,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 205,
        "end": 217,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 215,
            "argument": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 203,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 203,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 201,
              "end": 203,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 203,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 217,
      "end": 218
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 228,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 228,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 228,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 230,
      "end": 236,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 230,
        "end": 235,
        "arguments": [
          {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 246,
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 246,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 246,
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 248,
      "end": 254,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 253,
        "arguments": [
          {
            "type": "Identifier",
            "start": 250,
            "end": 252,
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 249,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 256,
      "end": 282,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 282,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 275,
            "end": 280,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 277,
                "end": 279,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 279,
                  "decorators": [],
                  "name": "I5",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 266,
        "end": 268,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 284,
      "end": 310,
      "body": {
        "type": "TSInterfaceBody",
        "start": 297,
        "end": 310,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 303,
            "end": 308,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 305,
                "end": 307,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 307,
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 294,
        "end": 296,
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "decorators": [],
            "name": "i4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 321,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 323,
      "end": 329,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 328,
        "arguments": [
          {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "i4",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
