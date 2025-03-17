__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 22,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "x",
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
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 61,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 61,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "y",
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
          "start": 49,
          "end": 55,
          "expression": {
            "type": "Identifier",
            "start": 49,
            "end": 55,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 40,
        "decorators": [],
        "name": "Giraffe",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 101,
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 101,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "z",
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
          "start": 89,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 80,
        "decorators": [],
        "name": "Elephant",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 167,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 167,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 148,
            "end": 165,
            "argument": {
              "type": "Identifier",
              "start": 155,
              "end": 164,
              "decorators": [],
              "name": "undefined",
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
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 135,
          "decorators": [],
          "name": "x",
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "y",
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
        "start": 142,
        "end": 145,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 144,
          "end": 145,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 129,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 123,
              "end": 129,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 129,
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
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
      "type": "VariableDeclaration",
      "start": 168,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 182,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 182,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 182,
                  "decorators": [],
                  "name": "Giraffe",
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
      "start": 184,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 199,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 199,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 199,
                  "decorators": [],
                  "name": "Elephant",
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
      "start": 201,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 208,
        "arguments": [
          {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
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
  "sourceType": "script",
  "hashbang": null
}
```
