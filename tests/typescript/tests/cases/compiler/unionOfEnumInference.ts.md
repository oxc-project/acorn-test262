__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "initializer": null,
            "computed": false,
            "start": 34,
            "end": 35
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "initializer": null,
            "computed": false,
            "start": 37,
            "end": 38
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "initializer": null,
            "computed": false,
            "start": 40,
            "end": 41
          }
        ],
        "start": 32,
        "end": 43
      },
      "const": false,
      "declare": false,
      "start": 22,
      "end": 43
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interface",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 64
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
              "start": 65,
              "end": 66
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 79
              },
              "typeArguments": null,
              "start": 75,
              "end": 79
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 79
          }
        ],
        "start": 64,
        "end": 80
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 88
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
                  "start": 90,
                  "end": 91
                },
                "typeArguments": null,
                "start": 90,
                "end": 91
              },
              "start": 88,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 84,
            "end": 92
          }
        ],
        "start": 81,
        "end": 94
      },
      "declare": false,
      "start": 45,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 108
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
              "start": 109,
              "end": 110
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 123
              },
              "typeArguments": null,
              "start": 119,
              "end": 123
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 123
          }
        ],
        "start": 108,
        "end": 124
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Interface",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 137
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
                      "start": 138,
                      "end": 139
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 139
                  }
                ],
                "start": 137,
                "end": 140
              },
              "start": 128,
              "end": 140
            },
            "start": 126,
            "end": 140
          },
          "start": 125,
          "end": 140
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 142,
        "end": 145
      },
      "expression": false,
      "start": 96,
      "end": 145
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 159
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Interface",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 172
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Enum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 173,
                                "end": 177
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 178,
                                "end": 179
                              },
                              "start": 173,
                              "end": 179
                            },
                            "typeArguments": null,
                            "start": 173,
                            "end": 179
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Enum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 186
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 187,
                                "end": 188
                              },
                              "start": 182,
                              "end": 188
                            },
                            "typeArguments": null,
                            "start": 182,
                            "end": 188
                          }
                        ],
                        "start": 173,
                        "end": 188
                      }
                    ],
                    "start": 172,
                    "end": 189
                  },
                  "start": 163,
                  "end": 189
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Interface",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 201
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Enum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 206
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 208
                          },
                          "start": 202,
                          "end": 208
                        },
                        "typeArguments": null,
                        "start": 202,
                        "end": 208
                      }
                    ],
                    "start": 201,
                    "end": 209
                  },
                  "start": 192,
                  "end": 209
                }
              ],
              "start": 163,
              "end": 209
            },
            "start": 161,
            "end": 209
          },
          "start": 160,
          "end": 209
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 217
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 219
                }
              ],
              "optional": false,
              "start": 214,
              "end": 220
            },
            "directive": null,
            "start": 214,
            "end": 221
          }
        ],
        "start": 211,
        "end": 223
      },
      "expression": false,
      "start": 147,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 223
}
```
