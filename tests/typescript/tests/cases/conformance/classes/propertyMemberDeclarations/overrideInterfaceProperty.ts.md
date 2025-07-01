__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 13,
        "end": 19
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 48
          }
        ],
        "start": 20,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MupConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 75
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 92
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    }
                  ],
                  "start": 92,
                  "end": 102
                },
                "start": 89,
                "end": 102
              },
              "start": 87,
              "end": 102
            },
            "start": 82,
            "end": 103
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 113
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 112,
                  "end": 113
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 115,
                  "end": 116
                }
              ],
              "start": 111,
              "end": 117
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "readonly",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeOperator",
                            "operator": "readonly",
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 148,
                                    "end": 149
                                  },
                                  "typeArguments": null,
                                  "start": 148,
                                  "end": 149
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 151,
                                    "end": 152
                                  },
                                  "typeArguments": null,
                                  "start": 151,
                                  "end": 152
                                }
                              ],
                              "start": 147,
                              "end": 153
                            },
                            "start": 138,
                            "end": 153
                          },
                          "start": 137,
                          "end": 156
                        },
                        "start": 128,
                        "end": 156
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 159,
                        "end": 163
                      }
                    ],
                    "start": 128,
                    "end": 163
                  },
                  "start": 126,
                  "end": 163
                },
                "start": 118,
                "end": 163
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 169
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 171
                      },
                      "typeArguments": null,
                      "start": 170,
                      "end": 171
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 174
                      },
                      "typeArguments": null,
                      "start": 173,
                      "end": 174
                    }
                  ],
                  "start": 169,
                  "end": 175
                },
                "start": 166,
                "end": 175
              },
              "start": 164,
              "end": 175
            },
            "start": 108,
            "end": 176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 204
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 205,
                      "end": 208
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 210,
                      "end": 213
                    }
                  ],
                  "start": 204,
                  "end": 214
                },
                "start": 201,
                "end": 214
              },
              "start": 199,
              "end": 214
            },
            "accessibility": null,
            "static": false,
            "start": 181,
            "end": 215
          }
        ],
        "start": 76,
        "end": 217
      },
      "declare": false,
      "start": 51,
      "end": 217
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MupConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 249
                },
                "typeArguments": null,
                "start": 235,
                "end": 249
              },
              "start": 233,
              "end": 249
            },
            "start": 230,
            "end": 249
          },
          "init": null,
          "definite": false,
          "start": 230,
          "end": 249
        }
      ],
      "declare": true,
      "start": 218,
      "end": 250
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sizz",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 262
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 274
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 328
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 340,
                      "end": 341
                    },
                    "start": 333,
                    "end": 341
                  }
                ],
                "start": 331,
                "end": 343
              },
              "expression": false,
              "start": 328,
              "end": 343
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 320,
            "end": 343
          }
        ],
        "start": 275,
        "end": 345
      },
      "abstract": false,
      "declare": false,
      "start": 252,
      "end": 345
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kasizz",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 358
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 370
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 381
            },
            "typeAnnotation": null,
            "value": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 385,
                "end": 386
              },
              "prefix": true,
              "start": 384,
              "end": 386
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 377,
            "end": 386
          }
        ],
        "start": 371,
        "end": 388
      },
      "abstract": false,
      "declare": false,
      "start": 346,
      "end": 388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 388
}
```
