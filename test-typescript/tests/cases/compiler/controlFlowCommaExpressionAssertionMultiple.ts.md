__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "Narrow",
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
          "start": 19,
          "end": 29,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 29,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 53,
        "body": []
      },
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
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 68,
        "name": "func",
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
          "start": 69,
          "end": 77,
          "name": "foo",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 77,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 74,
              "end": 77
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 79,
          "end": 87,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 87,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 84,
              "end": 87
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                    "name": "Narrow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 110,
                      "end": 113,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                  }
                },
                {
                  "type": "CallExpression",
                  "start": 116,
                  "end": 135,
                  "callee": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 122,
                    "name": "Narrow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 131,
                      "end": 134,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                  }
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 172,
        "name": "func2",
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
          "start": 173,
          "end": 181,
          "name": "foo",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 181,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 178,
              "end": 181
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 183,
          "end": 191,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 191,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 188,
              "end": 191
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 193,
          "end": 201,
          "name": "baz",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 196,
            "end": 201,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 198,
              "end": 201
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                    "name": "Narrow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 224,
                      "end": 227,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                  }
                },
                {
                  "type": "CallExpression",
                  "start": 230,
                  "end": 249,
                  "callee": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 236,
                    "name": "Narrow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 245,
                      "end": 248,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                  }
                },
                {
                  "type": "CallExpression",
                  "start": 251,
                  "end": 271,
                  "callee": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 257,
                    "name": "Narrow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                  }
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
