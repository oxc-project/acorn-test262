__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "typeArguments": null,
                "start": 24,
                "end": 25
              },
              "start": 22,
              "end": 25
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 26
          }
        ],
        "start": 15,
        "end": 28
      },
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uFirst",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 97
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "typeArguments": null,
                    "start": 110,
                    "end": 111
                  }
                ],
                "start": 109,
                "end": 112
              },
              "start": 108,
              "end": 112
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 112
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 97,
        "end": 116
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
              },
              "typeArguments": null,
              "start": 120,
              "end": 121
            },
            "start": 118,
            "end": 121
          },
          "start": 117,
          "end": 121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 123,
        "end": 126
      },
      "expression": false,
      "start": 82,
      "end": 126
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tFirst",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 142
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 143,
            "end": 144
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "typeArguments": null,
                    "start": 158,
                    "end": 159
                  }
                ],
                "start": 157,
                "end": 160
              },
              "start": 156,
              "end": 160
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 160
          }
        ],
        "start": 142,
        "end": 161
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "typeArguments": null,
              "start": 165,
              "end": 166
            },
            "start": 163,
            "end": 166
          },
          "start": 162,
          "end": 166
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 168,
        "end": 171
      },
      "expression": false,
      "start": 127,
      "end": 171
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 180
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 181,
                      "end": 187
                    }
                  ],
                  "start": 180,
                  "end": 188
                },
                "start": 179,
                "end": 188
              },
              "start": 177,
              "end": 188
            },
            "start": 176,
            "end": 188
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 191,
            "end": 195
          },
          "definite": false,
          "start": 176,
          "end": 195
        }
      ],
      "declare": false,
      "start": 172,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "uFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 239
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          }
        ],
        "optional": false,
        "start": 233,
        "end": 242
      },
      "directive": null,
      "start": 233,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "tFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 250
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 252
          }
        ],
        "optional": false,
        "start": 244,
        "end": 253
      },
      "directive": null,
      "start": 244,
      "end": 254
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 254
}
```
