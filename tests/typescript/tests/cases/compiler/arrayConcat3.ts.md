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
        "name": "Fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
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
              "start": 100,
              "end": 101
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 110,
              "end": 116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 100,
            "end": 116
          }
        ],
        "start": 99,
        "end": 117
      },
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "typeArguments": null,
                "start": 131,
                "end": 132
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 121,
              "end": 132
            }
          ],
          "start": 120,
          "end": 133
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "subj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "typeArguments": null,
                "start": 140,
                "end": 141
              },
              "start": 138,
              "end": 141
            },
            "start": 134,
            "end": 141
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "typeArguments": null,
            "start": 146,
            "end": 147
          },
          "start": 143,
          "end": 147
        },
        "start": 120,
        "end": 147
      },
      "declare": false,
      "start": 92,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 164
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
              "start": 165,
              "end": 166
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 181
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 185
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "typeArguments": null,
              "start": 194,
              "end": 195
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 183,
            "end": 195
          }
        ],
        "start": 164,
        "end": 196
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 205
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 208
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
                            "start": 209,
                            "end": 210
                          },
                          "typeArguments": null,
                          "start": 209,
                          "end": 210
                        }
                      ],
                      "start": 208,
                      "end": 211
                    },
                    "start": 206,
                    "end": 211
                  }
                ],
                "start": 205,
                "end": 212
              },
              "start": 200,
              "end": 212
            },
            "start": 198,
            "end": 212
          },
          "start": 197,
          "end": 212
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 222
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 225
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 226,
                          "end": 228
                        }
                      ],
                      "start": 225,
                      "end": 229
                    },
                    "start": 223,
                    "end": 229
                  }
                ],
                "start": 222,
                "end": 230
              },
              "start": 217,
              "end": 230
            },
            "start": 215,
            "end": 230
          },
          "start": 214,
          "end": 230
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 239
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 246
                },
                "optional": false,
                "computed": false,
                "start": 238,
                "end": 246
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                }
              ],
              "optional": false,
              "start": 238,
              "end": 249
            },
            "directive": null,
            "start": 238,
            "end": 250
          }
        ],
        "start": 232,
        "end": 252
      },
      "expression": false,
      "start": 148,
      "end": 252
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 252
}
```
