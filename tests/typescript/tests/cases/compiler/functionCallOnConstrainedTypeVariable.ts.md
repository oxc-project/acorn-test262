__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 294,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 31,
        "end": 61,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 59,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 59,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 38,
                "end": 59,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 39,
                    "end": 48,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 42,
                        "end": 48
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  }
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 72,
        "end": 103,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 101,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 101,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 79,
                "end": 101,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 80,
                    "end": 90,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 83,
                        "end": 90
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  }
                }
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
      "start": 106,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 120,
        "decorators": [],
        "name": "call0",
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
          "start": 121,
          "end": 129,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 129,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 124,
              "end": 129,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 125,
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 128,
                  "end": 129,
                  "typeName": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 131,
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 136,
            "end": 145,
            "expression": {
              "type": "CallExpression",
              "start": 136,
              "end": 144,
              "callee": {
                "type": "MemberExpression",
                "start": 136,
                "end": 139,
                "object": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 140,
                  "end": 143,
                  "value": "s",
                  "raw": "\"s\""
                }
              ],
              "optional": false
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
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 172,
        "decorators": [],
        "name": "callN",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 172,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 188,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 183,
              "end": 188,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 183,
                  "end": 184,
                  "typeName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 187,
                  "end": 188,
                  "typeName": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 188,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
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
          "start": 190,
          "end": 194,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 194,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 193,
              "end": 194,
              "typeName": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 294,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 200,
            "end": 209,
            "expression": {
              "type": "CallExpression",
              "start": 200,
              "end": 208,
              "callee": {
                "type": "MemberExpression",
                "start": 200,
                "end": 203,
                "object": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 204,
                  "end": 207,
                  "value": "s",
                  "raw": "\"s\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 224,
            "end": 244,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 228,
                "end": 243,
                "id": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 237,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 229,
                    "end": 237,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 231,
                      "end": 237,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 231,
                        "end": 232,
                        "typeName": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 233,
                        "end": 236,
                        "literal": {
                          "type": "Literal",
                          "start": 233,
                          "end": 236,
                          "value": "a",
                          "raw": "\"a\""
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 240,
                  "end": 243,
                  "object": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 247,
            "end": 253,
            "expression": {
              "type": "CallExpression",
              "start": 247,
              "end": 252,
              "callee": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 249,
                  "end": 251,
                  "value": "",
                  "raw": "\"\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 265,
            "end": 283,
            "expression": {
              "type": "CallExpression",
              "start": 265,
              "end": 282,
              "callee": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 267,
                  "end": 269,
                  "value": "",
                  "raw": "\"\""
                },
                {
                  "type": "Literal",
                  "start": 271,
                  "end": 273,
                  "value": "",
                  "raw": "\"\""
                },
                {
                  "type": "Literal",
                  "start": 275,
                  "end": 277,
                  "value": "",
                  "raw": "\"\""
                },
                {
                  "type": "Literal",
                  "start": 279,
                  "end": 281,
                  "value": "",
                  "raw": "\"\""
                }
              ],
              "optional": false
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
