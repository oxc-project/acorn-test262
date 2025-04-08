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
        "name": "Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                },
                "decorators": [],
                "optional": false
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "params": [
          {
            "type": "Identifier",
            "start": 57,
            "end": 89,
            "name": "target",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 89,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 65,
                "end": 89,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 68,
                  "end": 80,
                  "name": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "decorators": [],
            "optional": false
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
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "source",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 166,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 140,
                "end": 166,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 143,
                  "end": 155,
                  "name": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
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
                      "name": "Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
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
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "decorators": [],
            "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 196,
            "name": "f",
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
                  "name": "foo",
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 216,
            "name": "b",
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
                  "name": "bar",
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
      "kind": "let",
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
