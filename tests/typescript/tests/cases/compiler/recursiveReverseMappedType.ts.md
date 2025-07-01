__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recur",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 32
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "typeArguments": null,
              "start": 44,
              "end": 45
            },
            "extendsType": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 55,
                "end": 62
              },
              "start": 55,
              "end": 64
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 68,
              "end": 70
            },
            "falseType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 88
                  },
                  "typeArguments": null,
                  "start": 87,
                  "end": 88
                },
                "start": 81,
                "end": 88
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 97
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 99
                        },
                        "typeArguments": null,
                        "start": 98,
                        "end": 99
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 100,
                          "end": 101
                        },
                        "typeArguments": null,
                        "start": 100,
                        "end": 101
                      },
                      "start": 98,
                      "end": 102
                    }
                  ],
                  "start": 97,
                  "end": 103
                },
                "start": 92,
                "end": 103
              },
              "optional": true,
              "readonly": null,
              "start": 73,
              "end": 105
            },
            "start": 44,
            "end": 105
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "marker",
                  "raw": "'marker'",
                  "start": 111,
                  "end": 119
                },
                "start": 111,
                "end": 119
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Recur",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 129
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "typeArguments": null,
                          "start": 130,
                          "end": 131
                        }
                      ],
                      "start": 129,
                      "end": 132
                    },
                    "start": 124,
                    "end": 132
                  },
                  "start": 124,
                  "end": 134
                },
                "start": 121,
                "end": 134
              }
            ],
            "start": 110,
            "end": 135
          }
        ],
        "start": 38,
        "end": 135
      },
      "declare": false,
      "start": 22,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "join",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 151
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          }
        ],
        "start": 151,
        "end": 154
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 163
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 165
                      },
                      "typeArguments": null,
                      "start": 164,
                      "end": 165
                    }
                  ],
                  "start": 163,
                  "end": 166
                },
                "start": 158,
                "end": 166
              },
              "start": 158,
              "end": 168
            },
            "start": 156,
            "end": 168
          },
          "start": 155,
          "end": 168
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 176
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "typeArguments": null,
                "start": 177,
                "end": 178
              }
            ],
            "start": 176,
            "end": 179
          },
          "start": 171,
          "end": 179
        },
        "start": 169,
        "end": 179
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "marker",
                  "raw": "'marker'",
                  "start": 194,
                  "end": 202
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 208
                  },
                  "start": 204,
                  "end": 208
                }
              ],
              "start": 193,
              "end": 209
            },
            "start": 186,
            "end": 210
          }
        ],
        "start": 180,
        "end": 212
      },
      "expression": false,
      "start": 138,
      "end": 212
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 226
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 225,
            "end": 226
          }
        ],
        "start": 224,
        "end": 227
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recur",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 236
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 238
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 238
                    }
                  ],
                  "start": 236,
                  "end": 239
                },
                "start": 231,
                "end": 239
              },
              "start": 231,
              "end": 241
            },
            "start": 229,
            "end": 241
          },
          "start": 228,
          "end": 241
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 244,
          "end": 248
        },
        "start": 242,
        "end": 248
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Recur",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 264,
                            "end": 269
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 270,
                                  "end": 271
                                },
                                "typeArguments": null,
                                "start": 270,
                                "end": 271
                              }
                            ],
                            "start": 269,
                            "end": 272
                          },
                          "start": 264,
                          "end": 272
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 275,
                          "end": 284
                        }
                      ],
                      "start": 264,
                      "end": 284
                    },
                    "start": 262,
                    "end": 284
                  },
                  "start": 261,
                  "end": 284
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 291
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    }
                  ],
                  "optional": false,
                  "start": 287,
                  "end": 294
                },
                "definite": false,
                "start": 261,
                "end": 294
              }
            ],
            "declare": false,
            "start": 255,
            "end": 295
          }
        ],
        "start": 249,
        "end": 297
      },
      "expression": false,
      "start": 214,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 297
}
```
