__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 297,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "decorators": [],
        "name": "Recur",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 38,
        "end": 135,
        "types": [
          {
            "type": "TSConditionalType",
            "start": 44,
            "end": 105,
            "checkType": {
              "type": "TSTypeReference",
              "start": 44,
              "end": 45,
              "typeName": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSArrayType",
              "start": 55,
              "end": 64,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 55,
                "end": 62
              }
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "start": 68,
              "end": 70,
              "members": []
            },
            "falseType": {
              "type": "TSMappedType",
              "start": 73,
              "end": 105,
              "key": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 81,
                "end": 88,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 87,
                  "end": 88,
                  "typeName": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
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
                "type": "TSTypeReference",
                "start": 92,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 97,
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 97,
                  "end": 103,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 98,
                      "end": 102,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 100,
                        "end": 101,
                        "typeName": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              "optional": true,
              "readonly": null
            }
          },
          {
            "type": "TSTupleType",
            "start": 110,
            "end": 135,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 111,
                "end": 119,
                "literal": {
                  "type": "Literal",
                  "start": 111,
                  "end": 119,
                  "value": "marker",
                  "raw": "'marker'"
                }
              },
              {
                "type": "TSRestType",
                "start": 121,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 124,
                  "end": 134,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 124,
                    "end": 132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 129,
                      "decorators": [],
                      "name": "Recur",
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 151,
        "decorators": [],
        "name": "join",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
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
          "start": 155,
          "end": 168,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 168,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 158,
              "end": 168,
              "elementType": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 163,
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 163,
                  "end": 166,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 164,
                      "end": 165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 169,
        "end": 179,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 171,
          "end": 179,
          "typeName": {
            "type": "Identifier",
            "start": 171,
            "end": 176,
            "decorators": [],
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 176,
            "end": 179,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 177,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 212,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 186,
            "end": 210,
            "argument": {
              "type": "ArrayExpression",
              "start": 193,
              "end": 209,
              "elements": [
                {
                  "type": "Literal",
                  "start": 194,
                  "end": 202,
                  "value": "marker",
                  "raw": "'marker'"
                },
                {
                  "type": "SpreadElement",
                  "start": 204,
                  "end": 208,
                  "argument": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 208,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 224,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 224,
        "end": 227,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 225,
            "end": 226,
            "name": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
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
          "start": 228,
          "end": 241,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 241,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 231,
              "end": 241,
              "elementType": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 239,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 236,
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 236,
                  "end": 239,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 242,
        "end": 248,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 244,
          "end": 248
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 249,
        "end": 297,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 255,
            "end": 295,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 261,
                "end": 294,
                "id": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 284,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 262,
                    "end": 284,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 264,
                      "end": 284,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 264,
                          "end": 272,
                          "typeName": {
                            "type": "Identifier",
                            "start": 264,
                            "end": 269,
                            "decorators": [],
                            "name": "Recur",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 269,
                            "end": 272,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 270,
                                "end": 271,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 270,
                                  "end": 271,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 275,
                          "end": 284
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 287,
                  "end": 294,
                  "callee": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 291,
                    "decorators": [],
                    "name": "join",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
