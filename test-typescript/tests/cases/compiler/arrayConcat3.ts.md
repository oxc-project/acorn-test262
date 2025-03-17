__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 253,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 92,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "name": "Fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 116,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 110,
              "end": 116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 120,
        "end": 147,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 120,
          "end": 133,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 121,
              "end": 132,
              "name": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
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
            "start": 134,
            "end": 141,
            "name": "subj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 143,
          "end": 147,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 146,
            "end": 147,
            "typeName": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 164,
        "name": "doStuff",
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
          "start": 197,
          "end": 212,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 212,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 205,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 205,
                "end": 212,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 208,
                      "name": "Fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 208,
                      "end": 211,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 209,
                          "end": 210,
                          "typeName": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 210,
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
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 230,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 222,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 222,
                "end": 230,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 229,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 225,
                      "name": "Fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 225,
                      "end": 229,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 226,
                          "end": 228,
                          "typeName": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 228,
                            "name": "T1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 232,
        "end": 252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 238,
            "end": 250,
            "expression": {
              "type": "CallExpression",
              "start": 238,
              "end": 249,
              "callee": {
                "type": "MemberExpression",
                "start": 238,
                "end": 246,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 246,
                  "name": "concat",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 195,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 194,
              "end": 195,
              "typeName": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
