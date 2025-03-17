__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 21,
            "end": 36,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 30,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 29,
                    "end": 30,
                    "typeName": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
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
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 21,
              "end": 25,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 22,
                  "end": 23,
                  "name": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "name": "A",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 38,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "name": "a2",
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
          "start": 54,
          "end": 58,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
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
        "start": 60,
        "end": 72,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 70,
            "argument": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
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
        "start": 49,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 51,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "A",
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
      "type": "VariableDeclaration",
      "start": 74,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 83,
            "end": 104,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 92,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 92,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
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
              "type": "NewExpression",
              "start": 97,
              "end": 104,
              "callee": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 83,
              "end": 87,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 84,
                  "end": 85,
                  "name": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "name": "A",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 117,
        "name": "a4",
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
          "start": 122,
          "end": 126,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 126,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
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
        "start": 128,
        "end": 146,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 130,
            "end": 144,
            "argument": {
              "type": "NewExpression",
              "start": 137,
              "end": 144,
              "callee": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 119,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "name": "A",
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
      "type": "TSInterfaceDeclaration",
      "start": 149,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 161,
        "end": 164,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 174,
            "end": 189,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 183,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 180,
                  "end": 183,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 182,
                    "end": 183,
                    "typeName": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
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
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 174,
              "end": 178,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 175,
                  "end": 176,
                  "name": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "name": "B",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 202,
        "name": "b2",
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
          "start": 207,
          "end": 211,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 208,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 210,
              "end": 211,
              "typeName": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 213,
        "end": 225,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 215,
            "end": 223,
            "argument": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
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
        "start": 202,
        "end": 206,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 203,
            "end": 204,
            "name": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "name": "B",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
