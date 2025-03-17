__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 28,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 28,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "T",
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
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
      "start": 82,
      "end": 126,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 126,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 97,
        "decorators": [],
        "name": "uFirst",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 117,
          "end": 121,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 121,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 120,
              "end": 121,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 112,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 112,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 109,
                "end": 112,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 111,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "T",
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
      "start": 127,
      "end": 171,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 171,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 142,
        "decorators": [],
        "name": "tFirst",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 162,
          "end": 166,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 166,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 166,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 160,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 156,
              "end": 160,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 157,
                "end": 160,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 159,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
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
      "type": "VariableDeclaration",
      "start": 172,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 188,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 188,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 180,
                  "end": 188,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 181,
                      "end": 187
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 191,
            "end": 195,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 243,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 233,
        "end": 242,
        "arguments": [
          {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 233,
          "end": 239,
          "decorators": [],
          "name": "uFirst",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 254,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 244,
        "end": 253,
        "arguments": [
          {
            "type": "Identifier",
            "start": 251,
            "end": 252,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 244,
          "end": 250,
          "decorators": [],
          "name": "tFirst",
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
