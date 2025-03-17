__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
        "start": 18,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
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
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 51,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 47,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 49,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 77,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 61,
              "name": "owner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 67,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 75,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 72,
                        "end": 75,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 74,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
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
                  ]
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 98,
        "name": "MyList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 100,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
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
        "start": 102,
        "end": 169,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 108,
            "end": 116,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 112,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
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
          },
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 137,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 133,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 133,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 142,
            "end": 167,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "name": "owner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 155,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 155,
                  "end": 166,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 156,
                      "end": 165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 162,
                        "name": "MyList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 162,
                        "end": 165,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 163,
                            "end": 164,
                            "typeName": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 164,
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
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 171,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 190,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 182,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 182,
                  "end": 190,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
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
      "start": 192,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 213,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 205,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 205,
                  "end": 213,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 206,
                      "end": 212
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
      "type": "ExpressionStatement",
      "start": 216,
      "end": 223,
      "expression": {
        "type": "BinaryExpression",
        "start": 216,
        "end": 222,
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 261,
            "name": "l2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 249,
                "end": 261,
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 253,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 253,
                  "end": 261,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 254,
                      "end": 260
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
      "type": "ExpressionStatement",
      "start": 264,
      "end": 272,
      "expression": {
        "type": "BinaryExpression",
        "start": 264,
        "end": 271,
        "left": {
          "type": "Identifier",
          "start": 264,
          "end": 265,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 269,
          "end": 271,
          "name": "l2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 298,
      "expression": {
        "type": "BinaryExpression",
        "start": 291,
        "end": 297,
        "left": {
          "type": "Identifier",
          "start": 291,
          "end": 292,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "name": "l",
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
