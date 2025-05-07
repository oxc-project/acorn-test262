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
      "async": false,
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
              "arguments": [
                {
                  "type": "Literal",
                  "start": 80,
                  "end": 82,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 75,
                "end": 79,
                "decorators": [],
                "name": "ctor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 23,
        "decorators": [],
        "name": "createInstance",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 53,
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 53,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 33,
              "end": 53,
              "abstract": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 47,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 56,
          "end": 57,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 128,
      "end": 181,
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 181,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 156,
            "end": 179,
            "params": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 174,
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 166,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  }
                }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 146,
        "decorators": [],
        "name": "INewable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 148,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 183,
      "end": 284,
      "async": false,
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
              "arguments": [
                {
                  "type": "Literal",
                  "start": 255,
                  "end": 259,
                  "raw": "1024",
                  "value": 1024,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "decorators": [],
                "name": "ctor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 207,
        "decorators": [],
        "name": "createInstance2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 211,
          "end": 228,
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 228,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 225,
                "end": 228,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 227,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 227,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 225,
                "decorators": [],
                "name": "INewable",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 229,
        "end": 232,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 231,
          "end": 232,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 209,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
