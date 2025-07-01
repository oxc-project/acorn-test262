__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 75,
                        "end": 76
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 75,
                      "end": 76
                    }
                  ],
                  "start": 74,
                  "end": 77
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 85,
                                  "end": 86
                                },
                                "typeArguments": null,
                                "start": 85,
                                "end": 86
                              },
                              "start": 83,
                              "end": 86
                            },
                            "start": 82,
                            "end": 86
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 91,
                            "end": 98
                          },
                          "start": 88,
                          "end": 98
                        },
                        "start": 81,
                        "end": 98
                      },
                      "start": 79,
                      "end": 98
                    },
                    "start": 78,
                    "end": 98
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 107,
                              "end": 108
                            },
                            "typeArguments": null,
                            "start": 107,
                            "end": 108
                          },
                          "start": 105,
                          "end": 108
                        },
                        "start": 104,
                        "end": 108
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 113,
                        "end": 120
                      },
                      "start": 110,
                      "end": 120
                    },
                    "start": 103,
                    "end": 120
                  },
                  "start": 100,
                  "end": 120
                },
                "start": 74,
                "end": 120
              },
              "start": 72,
              "end": 120
            },
            "start": 71,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 120
        }
      ],
      "declare": true,
      "start": 57,
      "end": 121
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 140,
                        "end": 141
                      },
                      "constraint": {
                        "type": "TSUnknownKeyword",
                        "start": 150,
                        "end": 157
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 140,
                      "end": 157
                    }
                  ],
                  "start": 139,
                  "end": 158
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 164,
                              "end": 167
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 169,
                                  "end": 170
                                },
                                "typeArguments": null,
                                "start": 169,
                                "end": 170
                              },
                              "start": 167,
                              "end": 170
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 164,
                            "end": 170
                          }
                        ],
                        "start": 162,
                        "end": 172
                      },
                      "start": 160,
                      "end": 172
                    },
                    "start": 159,
                    "end": 172
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 177,
                    "end": 184
                  },
                  "start": 174,
                  "end": 184
                },
                "start": 139,
                "end": 184
              },
              "start": 137,
              "end": 184
            },
            "start": 136,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 136,
          "end": 184
        }
      ],
      "declare": true,
      "start": 122,
      "end": 185
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 200
              }
            ],
            "optional": false,
            "start": 197,
            "end": 201
          },
          "definite": false,
          "start": 193,
          "end": 201
        }
      ],
      "declare": false,
      "start": 187,
      "end": 202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FirstParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 223
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
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          }
        ],
        "start": 223,
        "end": 226
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "typeArguments": null,
          "start": 229,
          "end": 230
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 250
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 249,
                    "end": 250
                  },
                  "start": 243,
                  "end": 250
                },
                "start": 241,
                "end": 250
              },
              "start": 240,
              "end": 250
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 255,
              "end": 262
            },
            "start": 252,
            "end": 262
          },
          "start": 239,
          "end": 262
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 266
          },
          "typeArguments": null,
          "start": 265,
          "end": 266
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 269,
          "end": 276
        },
        "start": 229,
        "end": 276
      },
      "declare": false,
      "start": 204,
      "end": 277
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FirstParameter",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 302
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "typeArguments": null,
                "start": 303,
                "end": 311
              }
            ],
            "start": 302,
            "end": 312
          },
          "start": 288,
          "end": 312
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 313,
            "end": 318
          },
          "start": 313,
          "end": 318
        },
        "start": 288,
        "end": 319
      },
      "declare": false,
      "start": 279,
      "end": 320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 320
}
```
