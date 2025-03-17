__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 343,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "Pet",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 57,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 55,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 73,
        "name": "isPet",
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
          "start": 74,
          "end": 82,
          "name": "pet",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 82,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 140,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 102,
            "end": 138,
            "argument": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 137,
              "left": {
                "type": "UnaryExpression",
                "start": 109,
                "end": 124,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 124,
                  "object": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 119,
                    "name": "pet",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 124,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 129,
                "end": 137,
                "value": "string",
                "raw": "\"string\""
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 83,
        "end": 95,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 85,
          "end": 95,
          "parameterName": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "name": "pet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 92,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 92,
                "end": 95,
                "name": "Pet",
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
      "type": "ExportNamedDeclaration",
      "start": 142,
      "end": 343,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 149,
        "end": 343,
        "id": {
          "type": "Identifier",
          "start": 158,
          "end": 163,
          "name": "speak",
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
            "start": 182,
            "end": 191,
            "name": "pet",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 191,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 191,
                  "name": "TPet",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 193,
            "end": 221,
            "name": "voice",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 221,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 200,
                "end": 221,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 201,
                    "end": 210,
                    "name": "pet",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 204,
                      "end": 210,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 206,
                        "end": 210,
                        "typeName": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 210,
                          "name": "TPet",
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
                  "start": 212,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
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
          "start": 231,
          "end": 343,
          "body": [
            {
              "type": "IfStatement",
              "start": 237,
              "end": 318,
              "test": {
                "type": "UnaryExpression",
                "start": 241,
                "end": 252,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "CallExpression",
                  "start": 242,
                  "end": 252,
                  "callee": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "name": "isPet",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "name": "pet",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 254,
                "end": 318,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 264,
                    "end": 312,
                    "argument": {
                      "type": "NewExpression",
                      "start": 270,
                      "end": 311,
                      "callee": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 279,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 280,
                          "end": 310,
                          "value": "Expected \"pet\" to be a Pet",
                          "raw": "\"Expected \\\"pet\\\" to be a Pet\""
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 323,
              "end": 341,
              "argument": {
                "type": "CallExpression",
                "start": 330,
                "end": 340,
                "callee": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 335,
                  "name": "voice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 336,
                    "end": 339,
                    "name": "pet",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 163,
          "end": 181,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 164,
              "end": 180,
              "name": {
                "type": "Identifier",
                "start": 164,
                "end": 168,
                "name": "TPet",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 180,
                  "name": "Pet",
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
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 222,
          "end": 230,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 224,
            "end": 230
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
