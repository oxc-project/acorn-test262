__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 317,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "Mock",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 47,
              "end": 52,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 62,
          "end": 70,
          "expression": {
            "type": "Identifier",
            "start": 62,
            "end": 70,
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 97,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 77,
            "end": 95,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 78,
                "end": 88,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 85,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 94,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 98,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 109,
        "decorators": [],
        "name": "Tester",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 112,
        "end": 161,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 113,
            "end": 122,
            "decorators": [],
            "name": "opts",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          },
          {
            "type": "Identifier",
            "start": 124,
            "end": 153,
            "decorators": [],
            "name": "done",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 153,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 130,
                "end": 153,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 131,
                    "end": 145,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 138,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 145,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 140,
                        "end": 145,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 140,
                          "end": 143
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 150,
                    "end": 153
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 155,
          "end": 161,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 158,
            "end": 161
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 163,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 185,
        "decorators": [],
        "name": "cases",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 186,
          "end": 200,
          "decorators": [],
          "name": "tester",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 200,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 194,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 194,
                "end": 200,
                "decorators": [],
                "name": "Tester",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 201,
        "end": 207,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 203,
          "end": 207
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 209,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 228,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 228,
        "end": 245,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 229,
            "end": 244,
            "name": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 239,
              "end": 244,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 239,
                "end": 242
              }
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
          "start": 246,
          "end": 282,
          "decorators": [],
          "name": "implementation",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 282,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 263,
              "end": 282,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 264,
                  "end": 274,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 271,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 271,
                    "end": 274,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 273,
                      "end": 274,
                      "typeName": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 274,
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 276,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 279,
                  "end": 282
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 283,
        "end": 292,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 285,
          "end": 292,
          "typeName": {
            "type": "Identifier",
            "start": 285,
            "end": 289,
            "decorators": [],
            "name": "Mock",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 289,
            "end": 292,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 290,
                "end": 291,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 317,
      "expression": {
        "type": "CallExpression",
        "start": 294,
        "end": 316,
        "callee": {
          "type": "Identifier",
          "start": 294,
          "end": 299,
          "decorators": [],
          "name": "cases",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 300,
            "end": 315,
            "callee": {
              "type": "Identifier",
              "start": 300,
              "end": 302,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 303,
                "end": 314,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
                    "decorators": [],
                    "name": "opts",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 311,
                  "end": 314,
                  "body": []
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
