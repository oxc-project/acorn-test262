__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "Narrow",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
          "start": 19,
          "end": 29,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 29,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 50,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 32,
          "end": 50,
          "parameterName": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 50,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 49,
              "end": 50,
              "typeName": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 53,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 68,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 69,
          "end": 77,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 77,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 74,
              "end": 77
            }
          }
        },
        {
          "type": "Identifier",
          "start": 79,
          "end": 87,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 87,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 84,
              "end": 87
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 89,
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 136,
            "expression": {
              "type": "SequenceExpression",
              "start": 95,
              "end": 135,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 95,
                  "end": 114,
                  "callee": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 101,
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 101,
                    "end": 109,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 113,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                {
                  "type": "CallExpression",
                  "start": 116,
                  "end": 135,
                  "callee": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 122,
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 122,
                    "end": 130,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 123,
                        "end": 129
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 131,
                      "end": 134,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 145,
            "expression": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 150,
            "end": 154,
            "expression": {
              "type": "Identifier",
              "start": 150,
              "end": 153,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 172,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 181,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 181,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 178,
              "end": 181
            }
          }
        },
        {
          "type": "Identifier",
          "start": 183,
          "end": 191,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 191,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 188,
              "end": 191
            }
          }
        },
        {
          "type": "Identifier",
          "start": 193,
          "end": 201,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 196,
            "end": 201,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 198,
              "end": 201
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 203,
        "end": 301,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 209,
            "end": 272,
            "expression": {
              "type": "SequenceExpression",
              "start": 209,
              "end": 271,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 209,
                  "end": 228,
                  "callee": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 215,
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 215,
                    "end": 223,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 216,
                        "end": 222
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 224,
                      "end": 227,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                {
                  "type": "CallExpression",
                  "start": 230,
                  "end": 249,
                  "callee": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 236,
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 236,
                    "end": 244,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 245,
                      "end": 248,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                {
                  "type": "CallExpression",
                  "start": 251,
                  "end": 271,
                  "callee": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 257,
                    "decorators": [],
                    "name": "Narrow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 257,
                    "end": 266,
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 258,
                        "end": 265
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 277,
            "end": 281,
            "expression": {
              "type": "Identifier",
              "start": 277,
              "end": 280,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 286,
            "end": 290,
            "expression": {
              "type": "Identifier",
              "start": 286,
              "end": 289,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 299,
            "expression": {
              "type": "Identifier",
              "start": 295,
              "end": 298,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
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
