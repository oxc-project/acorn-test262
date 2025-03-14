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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "decorators": [],
        "name": "Fn",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 120,
        "end": 147,
        "params": [
          {
            "type": "Identifier",
            "start": 134,
            "end": 141,
            "decorators": [],
            "name": "subj",
            "optional": false,
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
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
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
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 120,
          "end": 133,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 121,
              "end": 132,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 132,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "U",
                "optional": false
              },
              "out": false
            }
          ]
        }
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
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 110,
              "end": 116
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 252,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 238,
                "end": 246,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 246,
                  "decorators": [],
                  "name": "concat",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 164,
        "decorators": [],
        "name": "doStuff",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 212,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 212,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 212,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 205,
                "end": 212,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 211,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 208,
                      "decorators": [],
                      "name": "Fn",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 205,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 230,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 230,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 222,
                "end": 230,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 229,
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
                            "decorators": [],
                            "name": "T1",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 225,
                      "decorators": [],
                      "name": "Fn",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 222,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 181,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 175,
              "end": 181
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 195,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 194,
              "end": 195,
              "typeName": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "decorators": [],
              "name": "T1",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
