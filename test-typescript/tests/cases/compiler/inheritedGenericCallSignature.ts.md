__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 36,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 23,
            "end": 33,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
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
              "start": 29,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 31,
                "end": 32,
                "typeName": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      },
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
      "start": 39,
      "end": 58,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 58,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 55,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 63,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 107,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 87,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 87,
            "end": 89,
            "decorators": [],
            "name": "I1",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 89,
            "end": 94,
            "params": [
              {
                "type": "TSArrayType",
                "start": 90,
                "end": 93,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 90,
                  "end": 91,
                  "typeName": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 75,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
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
      "start": 115,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 130,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 130,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 130,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 129,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 124,
                  "decorators": [],
                  "name": "I2",
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
      "start": 136,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 144,
            "end": 156,
            "arguments": [
              {
                "type": "Identifier",
                "start": 146,
                "end": 155,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 168,
      "expression": {
        "type": "MemberExpression",
        "start": 159,
        "end": 167,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 159,
          "end": 160,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 161,
          "end": 167,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
