__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 40,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 32,
          "end": 36,
          "expression": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 33,
            "end": 36,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 18,
            "end": 19,
            "typeName": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 54,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 51,
                  "end": 54,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 52,
                      "end": 53,
                      "typeName": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 68,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 65,
                  "end": 68,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 67,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 71,
            "end": 75,
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
      "type": "VariableDeclaration",
      "start": 77,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 91,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 91,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 85,
                  "end": 88,
                  "left": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 88,
                  "end": 91,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 89,
                      "end": 90,
                      "typeName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 109,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 109,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 101,
                  "end": 106,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 101,
                    "end": 104,
                    "left": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 102,
                      "name": "G",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "name": "H",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 106,
                  "end": 109,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 108,
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 108,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 125,
            "name": "v6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 119,
                "end": 125,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 123,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 120,
                    "end": 123,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 121,
                        "end": 122,
                        "typeName": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 140,
        "name": "f1",
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
          "start": 141,
          "end": 148,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 148,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 144,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 145,
                "end": 148,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 146,
                    "end": 147,
                    "typeName": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 150,
        "end": 153,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 166,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 178,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 168,
        "end": 174,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 170,
          "end": 174,
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 171,
            "end": 174,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
