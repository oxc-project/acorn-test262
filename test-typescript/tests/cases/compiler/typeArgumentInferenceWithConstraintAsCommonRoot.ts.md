typeArgumentInferenceWithConstraintAsCommonRoot.ts
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
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
        "optional": false
      }
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 40,
        "decorators": [],
        "name": "Giraffe",
        "optional": false
      }
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 80,
        "decorators": [],
        "name": "Elephant",
        "optional": false
      }
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
              "optional": false
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
        "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "T",
                "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "T",
                "optional": false
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
          "typeName": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "T",
            "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 123,
                "end": 129,
                "decorators": [],
                "name": "Animal",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "T",
              "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 182,
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 199,
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false
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
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "e",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
