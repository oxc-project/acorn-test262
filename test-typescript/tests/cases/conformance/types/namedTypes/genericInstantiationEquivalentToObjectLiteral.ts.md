__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Pair",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 17,
              "name": "T1",
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
            "start": 19,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "name": "T2",
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
        "start": 23,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 30,
              "name": "first",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 47,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 42,
              "name": "second",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T2",
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
      "start": 50,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 77,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 61,
                  "name": "Pair",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
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
      "start": 78,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 119,
            "name": "y",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 92,
                      "name": "first",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 102,
                    "end": 117,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 108,
                      "name": "second",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 110,
                        "end": 116
                      }
                    },
                    "accessibility": null,
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
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
          "start": 161,
          "end": 174,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 168,
                "name": "Pair",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 173,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 154,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 156,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
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
            "start": 158,
            "end": 159,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
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
    {
      "type": "TSDeclareFunction",
      "start": 177,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 196,
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
          "start": 203,
          "end": 230,
          "name": "x",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 213,
                    "name": "first",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 218,
                  "end": 228,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 224,
                    "name": "second",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "name": "U",
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
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 198,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
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
            "start": 200,
            "end": 201,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 239,
      "expression": {
        "type": "CallExpression",
        "start": 234,
        "end": 238,
        "callee": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "name": "x",
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
      "start": 240,
      "end": 245,
      "expression": {
        "type": "CallExpression",
        "start": 240,
        "end": 244,
        "callee": {
          "type": "Identifier",
          "start": 240,
          "end": 241,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "name": "y",
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
      "start": 246,
      "end": 252,
      "expression": {
        "type": "CallExpression",
        "start": 246,
        "end": 251,
        "callee": {
          "type": "Identifier",
          "start": 246,
          "end": 248,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "name": "x",
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
      "start": 253,
      "end": 259,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 258,
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 255,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "name": "y",
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
