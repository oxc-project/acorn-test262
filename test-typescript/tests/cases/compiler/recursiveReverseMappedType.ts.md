__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 298,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "name": "Recur",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 76,
                "end": 88,
                "name": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "type": "TSTypeReference",
                "start": 92,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 97,
                  "name": "Recur",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              "optional": true,
              "readonly": null,
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
                "start": 76,
                "end": 77,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                      "name": "Recur",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
        "name": "join",
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
          "start": 155,
          "end": 168,
          "name": "l",
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
                  "name": "Recur",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        }
      ],
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
                    "name": "l",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
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
            "name": "Recur",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
    {
      "type": "FunctionDeclaration",
      "start": 214,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 224,
        "name": "a",
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
          "start": 228,
          "end": 241,
          "name": "l",
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
                  "name": "Recur",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 249,
        "end": 297,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 255,
            "end": 295,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 261,
                "end": 294,
                "id": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 284,
                  "name": "x",
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
                            "name": "Recur",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                          "type": "TSUndefinedKeyword",
                          "start": 275,
                          "end": 284
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 287,
                  "end": 294,
                  "callee": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 291,
                    "name": "join",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "name": "l",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 242,
        "end": 248,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 244,
          "end": 248
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
