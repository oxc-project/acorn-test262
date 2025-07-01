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
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
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
              "start": 38,
              "end": 39
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 39
          }
        ],
        "start": 37,
        "end": 40
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "equalsShallow",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 60
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 61,
                    "end": 62
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 61,
                  "end": 62
                }
              ],
              "start": 60,
              "end": 63
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 83
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
                            "start": 84,
                            "end": 85
                          },
                          "typeArguments": null,
                          "start": 84,
                          "end": 85
                        }
                      ],
                      "start": 83,
                      "end": 86
                    },
                    "start": 70,
                    "end": 86
                  },
                  "start": 68,
                  "end": 86
                },
                "start": 64,
                "end": 86
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 108
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
                            "start": 109,
                            "end": 110
                          },
                          "typeArguments": null,
                          "start": 109,
                          "end": 110
                        }
                      ],
                      "start": 108,
                      "end": 111
                    },
                    "start": 95,
                    "end": 111
                  },
                  "start": 93,
                  "end": 111
                },
                "start": 88,
                "end": 111
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 114,
                "end": 121
              },
              "start": 112,
              "end": 121
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 47,
            "end": 122
          }
        ],
        "start": 41,
        "end": 124
      },
      "declare": false,
      "start": 22,
      "end": 124
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 144,
                          "end": 150
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 153,
                          "end": 159
                        }
                      ],
                      "start": 144,
                      "end": 159
                    },
                    "start": 143,
                    "end": 162
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNullKeyword",
                      "start": 165,
                      "end": 169
                    },
                    "start": 165,
                    "end": 171
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUndefinedKeyword",
                      "start": 174,
                      "end": 183
                    },
                    "start": 174,
                    "end": 185
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 188,
                      "end": 190
                    },
                    "start": 188,
                    "end": 192
                  }
                ],
                "start": 143,
                "end": 192
              },
              "start": 141,
              "end": 192
            },
            "start": 140,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 192
        }
      ],
      "declare": true,
      "start": 126,
      "end": 193
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 212,
                          "end": 218
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 221,
                          "end": 227
                        }
                      ],
                      "start": 212,
                      "end": 227
                    },
                    "start": 211,
                    "end": 230
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNullKeyword",
                      "start": 233,
                      "end": 237
                    },
                    "start": 233,
                    "end": 239
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUndefinedKeyword",
                      "start": 242,
                      "end": 251
                    },
                    "start": 242,
                    "end": 253
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 256,
                      "end": 258
                    },
                    "start": 256,
                    "end": 260
                  }
                ],
                "start": 211,
                "end": 260
              },
              "start": 209,
              "end": 260
            },
            "start": 208,
            "end": 260
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 260
        }
      ],
      "declare": true,
      "start": 194,
      "end": 261
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 268
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 272
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "equalsShallow",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 286
              },
              "optional": false,
              "computed": false,
              "start": 271,
              "end": 286
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 288
              }
            ],
            "optional": false,
            "start": 271,
            "end": 289
          },
          "definite": false,
          "start": 267,
          "end": 289
        }
      ],
      "declare": false,
      "start": 263,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 290
}
```
