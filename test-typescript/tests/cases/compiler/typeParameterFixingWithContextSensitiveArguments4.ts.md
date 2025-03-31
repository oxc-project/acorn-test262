__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 93,
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
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 21,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 20,
              "end": 21,
              "typeName": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
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
          "start": 23,
          "end": 28,
          "name": "y1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
        },
        {
          "type": "Identifier",
          "start": 30,
          "end": 44,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 44,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 44,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 37,
                      "end": 38,
                      "typeName": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
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
                "start": 40,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 46,
          "end": 61,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 61,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 50,
              "end": 61,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "name": "x",
                  "typeAnnotation": {
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
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 57,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 61,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 93,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 73,
            "end": 91,
            "argument": {
              "type": "ArrayExpression",
              "start": 80,
              "end": 90,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "CallExpression",
                  "start": 84,
                  "end": 89,
                  "callee": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 86,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ]
            }
          }
        ]
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
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
        "start": 62,
        "end": 70,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 64,
          "end": 70,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 65,
              "end": 66,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 68,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 115,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 108,
            "end": 113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "name": "A",
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
      "start": 116,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 136,
          "end": 137,
          "expression": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 144,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 142,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 154,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 153,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
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
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
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
      "type": "VariableDeclaration",
      "start": 163,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 171,
            "end": 199,
            "callee": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 179,
                "end": 185,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 185,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 187,
                "end": 198,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 187,
                    "end": 188,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "TSTypeAssertion",
                  "start": 192,
                  "end": 198,
                  "expression": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 193,
                    "end": 196
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
