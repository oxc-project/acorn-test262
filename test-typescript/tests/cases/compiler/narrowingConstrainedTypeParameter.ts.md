narrowingConstrainedTypeParameter.ts
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
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Pet",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 140,
      "async": false,
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
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 109,
                "end": 124,
                "argument": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 124,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 119,
                    "decorators": [],
                    "name": "pet",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 124,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 129,
                "end": 137,
                "raw": "\"string\"",
                "value": "string"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 73,
        "decorators": [],
        "name": "isPet",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 82,
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 82,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 83,
        "end": 95,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 85,
          "end": 95,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "decorators": [],
            "name": "pet",
            "optional": false
          },
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
                "decorators": [],
                "name": "Pet",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 142,
      "end": 343,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 149,
        "end": 343,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 231,
          "end": 343,
          "body": [
            {
              "type": "IfStatement",
              "start": 237,
              "end": 318,
              "alternate": null,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 280,
                          "end": 310,
                          "raw": "\"Expected \\\"pet\\\" to be a Pet\"",
                          "value": "Expected \"pet\" to be a Pet"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 279,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "UnaryExpression",
                "start": 241,
                "end": 252,
                "argument": {
                  "type": "CallExpression",
                  "start": 242,
                  "end": 252,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "decorators": [],
                      "name": "pet",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 247,
                    "decorators": [],
                    "name": "isPet",
                    "optional": false
                  },
                  "optional": false
                },
                "operator": "!",
                "prefix": true
              }
            },
            {
              "type": "ReturnStatement",
              "start": 323,
              "end": 341,
              "argument": {
                "type": "CallExpression",
                "start": 330,
                "end": 340,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 336,
                    "end": 339,
                    "decorators": [],
                    "name": "pet",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 335,
                  "decorators": [],
                  "name": "voice",
                  "optional": false
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
          "start": 158,
          "end": 163,
          "decorators": [],
          "name": "speak",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 182,
            "end": 191,
            "decorators": [],
            "name": "pet",
            "optional": false,
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
                  "decorators": [],
                  "name": "TPet",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 193,
            "end": 221,
            "decorators": [],
            "name": "voice",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 221,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 200,
                "end": 221,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 201,
                    "end": 210,
                    "decorators": [],
                    "name": "pet",
                    "optional": false,
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
                          "decorators": [],
                          "name": "TPet",
                          "optional": false
                        }
                      }
                    }
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
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 222,
          "end": 230,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 224,
            "end": 230
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 163,
          "end": 181,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 164,
              "end": 180,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 180,
                  "decorators": [],
                  "name": "Pet",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 164,
                "end": 168,
                "decorators": [],
                "name": "TPet",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
