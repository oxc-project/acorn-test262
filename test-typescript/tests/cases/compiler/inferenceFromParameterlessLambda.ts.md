__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 43,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 43,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 26,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 26,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 26,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 23,
                "end": 26,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 24,
                    "end": 25,
                    "typeName": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 25,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 23,
                "decorators": [],
                "name": "Take",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 28,
          "end": 38,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 38,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 35,
                "end": 38,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 35,
                "decorators": [],
                "name": "Make",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 76,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 76,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 68,
            "end": 74,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Make",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 116,
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 116,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 101,
            "end": 114,
            "params": [
              {
                "type": "Identifier",
                "start": 102,
                "end": 106,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 103,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 105,
                    "end": 106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
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
              "start": 107,
              "end": 113,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 109,
                "end": 113
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 91,
        "decorators": [],
        "name": "Take",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
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
      "type": "ExpressionStatement",
      "start": 189,
      "end": 220,
      "expression": {
        "type": "CallExpression",
        "start": 189,
        "end": 219,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 193,
            "end": 206,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 198,
              "end": 206,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 198,
                "end": 199,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 200,
                "end": 206,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 208,
            "end": 218,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 214,
              "end": 218,
              "raw": "'hi'",
              "value": "hi"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 192,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
