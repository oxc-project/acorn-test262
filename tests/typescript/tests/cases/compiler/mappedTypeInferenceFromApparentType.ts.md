__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 39,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 17,
            "end": 37,
            "parameters": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 27,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 42,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 53,
        "end": 98,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 53,
          "end": 56,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 54,
              "end": 55,
              "name": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 57,
            "end": 89,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 89,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 65,
                "end": 89,
                "key": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 73,
                  "end": 80,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 79,
                    "end": 80,
                    "typeName": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 83,
                  "end": 87,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 83,
                    "end": 84,
                    "typeName": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "optional": false,
                "readonly": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 91,
          "end": 98,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 94,
            "end": 98
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 100,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 111,
        "end": 175,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 111,
          "end": 131,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 112,
              "end": 130,
              "name": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSArrayType",
                "start": 122,
                "end": 130,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 122,
                  "end": 128
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 132,
            "end": 166,
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 166,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 140,
                "end": 166,
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 148,
                  "end": 155,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 158,
                  "end": 164,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 161,
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 161,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 162,
                    "end": 163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "optional": false,
                "readonly": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 168,
          "end": 175,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 171,
            "end": 175
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 197,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 196,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 217,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 216,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 216,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 216,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 224,
      "expression": {
        "type": "AssignmentExpression",
        "start": 218,
        "end": 223,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 218,
          "end": 219,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
