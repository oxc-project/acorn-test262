__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 77,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 15,
        "end": 76,
        "checkType": {
          "type": "TSTupleType",
          "start": 15,
          "end": 18,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 16,
              "end": 17,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 27,
          "end": 34,
          "elementTypes": [
            {
              "type": "TSArrayType",
              "start": 28,
              "end": 33,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 61,
          "end": 76,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 63,
              "end": 74,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 71,
                "decorators": [],
                "name": "notArray",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 74,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 73,
                  "end": 74,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 37,
          "end": 58,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 56,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 46,
                  "end": 56,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 50,
                    "end": 56,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 51,
                        "end": 55,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 53,
                          "end": 54,
                          "literal": {
                            "type": "Literal",
                            "start": 53,
                            "end": 54,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 51,
                          "end": 52,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 52,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 50,
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "start": 78,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 109,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 109,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 99,
                  "end": 109,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 100,
                      "end": 108,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 99,
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 151,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 120,
                "end": 151,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 122,
                    "end": 149,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 127,
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 127,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 129,
                        "end": 149,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 131,
                            "end": 147,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 139,
                              "decorators": [],
                              "name": "notArray",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 139,
                              "end": 147,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 141,
                                "end": 147
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 195,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 195,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 187,
                  "end": 195,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 188,
                      "end": 194
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 187,
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 226,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 206,
                "end": 226,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 208,
                    "end": 224,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 216,
                      "decorators": [],
                      "name": "notArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 216,
                      "end": 224,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 218,
                        "end": 224
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
