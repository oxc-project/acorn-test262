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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 28,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 26,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 82,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 97,
        "name": "uFirst",
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
          "start": 117,
          "end": 121,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 121,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 120,
              "end": 121,
              "typeName": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
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
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 126,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 112,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 109,
                "end": 112,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 142,
        "name": "tFirst",
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
          "start": 162,
          "end": 166,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 166,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 166,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
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
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 171,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
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
            "start": 146,
            "end": 160,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 156,
              "end": 160,
              "typeName": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 157,
                "end": 160,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 159,
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
      "start": 172,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 188,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 191,
            "end": 195,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 243,
      "expression": {
        "type": "CallExpression",
        "start": 233,
        "end": 242,
        "callee": {
          "type": "Identifier",
          "start": 233,
          "end": 239,
          "name": "uFirst",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "name": "z",
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
      "start": 244,
      "end": 254,
      "expression": {
        "type": "CallExpression",
        "start": 244,
        "end": 253,
        "callee": {
          "type": "Identifier",
          "start": 244,
          "end": 250,
          "name": "tFirst",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 251,
            "end": 252,
            "name": "z",
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
