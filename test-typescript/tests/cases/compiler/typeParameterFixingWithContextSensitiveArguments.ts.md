__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 74,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 74,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 55,
            "end": 72,
            "argument": {
              "type": "ArrayExpression",
              "start": 62,
              "end": 71,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "CallExpression",
                  "start": 66,
                  "end": 70,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ]
            }
          }
        ]
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
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 21,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 20,
              "end": 21,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 23,
          "end": 37,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 37,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 26,
              "end": 37,
              "params": [
                {
                  "type": "Identifier",
                  "start": 27,
                  "end": 31,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 36,
                  "end": 37,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 39,
          "end": 43,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 43,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 42,
              "end": 43,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 52,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 46,
          "end": 52,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 47,
              "end": 48,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
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
              "name": "T",
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
              "name": "U",
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
      "start": 75,
      "end": 96,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 96,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 94,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "A",
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
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 97,
      "end": 125,
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 125,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 123,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 117,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 135,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 135,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 141,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
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
      "type": "VariableDeclaration",
      "start": 144,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 152,
            "end": 169,
            "arguments": [
              {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 157,
                "end": 165,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 162,
                  "end": 165,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 195,
            "end": 215,
            "arguments": [
              {
                "type": "Identifier",
                "start": 197,
                "end": 198,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 200,
                "end": 208,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 205,
                  "end": 208,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 208,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 210,
                "end": 214,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 238,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 241,
            "end": 261,
            "arguments": [
              {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 246,
                "end": 254,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 251,
                  "end": 254,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 256,
                "end": 260,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 241,
              "end": 242,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
