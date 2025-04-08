__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 23,
        "name": "createInstance",
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
          "start": 27,
          "end": 53,
          "name": "ctor",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 53,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 33,
              "end": 53,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 47,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 107,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 64,
            "end": 84,
            "argument": {
              "type": "NewExpression",
              "start": 71,
              "end": 83,
              "callee": {
                "type": "Identifier",
                "start": 75,
                "end": 79,
                "name": "ctor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 80,
                  "end": 82,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
        "start": 54,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 56,
          "end": 57,
          "typeName": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 128,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 146,
        "name": "INewable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 181,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 156,
            "end": 179,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 174,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 166,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 183,
      "end": 284,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 207,
        "name": "createInstance2",
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
          "start": 211,
          "end": 228,
          "name": "ctor",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 228,
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 225,
                "name": "INewable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 225,
                "end": 228,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 227,
                    "typeName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 227,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 233,
        "end": 284,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 239,
            "end": 261,
            "argument": {
              "type": "NewExpression",
              "start": 246,
              "end": 260,
              "callee": {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "name": "ctor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 255,
                  "end": 259,
                  "value": 1024,
                  "raw": "1024"
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 209,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
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
        "start": 229,
        "end": 232,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 231,
          "end": 232,
          "typeName": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
