__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 42,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 71,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "S",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 88,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 82,
            "end": 88,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 83,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 84,
                  "end": 87,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 86,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 101,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 95,
            "end": 99,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSInterfaceDeclaration",
      "start": 103,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 116,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "S",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 126,
          "end": 133,
          "expression": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 127,
            "end": 133,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 128,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 129,
                  "end": 132,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 134,
        "end": 146,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 144,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 144,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 148,
      "end": 182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 182,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 156,
                  "end": 182,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 157,
                      "end": 181,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 159,
                          "end": 169,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 159,
                            "end": 160,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 160,
                            "end": 168,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 162,
                              "end": 168
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 170,
                          "end": 179,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 171,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 171,
                            "end": 179,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 173,
                              "end": 179
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 221,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 217,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 190,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 191,
                  "end": 217,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 192,
                      "end": 216,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 194,
                          "end": 204,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 194,
                            "end": 195,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 195,
                            "end": 203,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 197,
                              "end": 203
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 205,
                          "end": 214,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 206,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 206,
                            "end": 214,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 208,
                              "end": 214
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
