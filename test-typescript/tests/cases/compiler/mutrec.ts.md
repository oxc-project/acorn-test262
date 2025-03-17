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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 24,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 21,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 52,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "name": "f",
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
          "start": 67,
          "end": 71,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 71,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
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
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "name": "B",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 101,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 100,
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "b",
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
      "type": "TSInterfaceDeclaration",
      "start": 103,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 129,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 122,
            "end": 127,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 126,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 131,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 144,
        "end": 157,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 150,
            "end": 155,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 154,
                  "name": "I3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 159,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 171,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 178,
            "end": 183,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 182,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 187,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "name": "g",
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
          "start": 198,
          "end": 203,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 203,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 201,
              "end": 203,
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 203,
                "name": "I1",
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
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 228,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 228,
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 230,
        "end": 235,
        "callee": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "name": "i2",
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
      "type": "VariableDeclaration",
      "start": 237,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 246,
            "name": "i3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 246,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 246,
                  "name": "I3",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 254,
      "expression": {
        "type": "CallExpression",
        "start": 248,
        "end": 253,
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 249,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 250,
            "end": 252,
            "name": "i3",
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
      "type": "TSInterfaceDeclaration",
      "start": 256,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 268,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 282,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 275,
            "end": 280,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 277,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 279,
                  "name": "I5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 284,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 296,
        "name": "I5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 297,
        "end": 310,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 303,
            "end": 308,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 305,
                "end": 307,
                "typeName": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 307,
                  "name": "I4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "name": "i4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "name": "I4",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 329,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 328,
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "i4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
