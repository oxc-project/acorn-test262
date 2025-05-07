__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 76,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 76,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 18,
                "end": 76,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 40,
                    "end": 65,
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "start": 48,
                        "end": 65,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 58,
                          "end": 59,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 54,
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "nameType": null,
                        "optional": false,
                        "readonly": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 62,
                          "end": 63,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 63,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 70,
                    "end": 76
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 18,
                  "end": 39,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 19,
                      "end": 35,
                      "const": false,
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 29,
                        "end": 35
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 37,
                      "end": 38,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 122,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 95,
                "end": 122,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 97,
                    "end": 120,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 98,
                        "end": 111,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 103,
                          "end": 111,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 105,
                            "end": 111
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 114,
                        "end": 120
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 130,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 124,
        "end": 129,
        "arguments": [
          {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 124,
          "end": 126,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 154,
      "end": 240,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 181,
        "decorators": [],
        "name": "enumValues",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 218,
          "end": 233,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 233,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 221,
              "end": 233,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 227,
                "end": 233,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 229,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 221,
                "end": 227,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 234,
        "end": 239,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 236,
          "end": 239,
          "elementType": {
            "type": "TSTypeReference",
            "start": 236,
            "end": 237,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 181,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 198,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 216,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 242,
      "end": 273,
      "body": {
        "type": "TSEnumBody",
        "start": 249,
        "end": 273,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 251,
            "end": 260,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 255,
              "end": 260,
              "raw": "'foo'",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 262,
            "end": 271,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 266,
              "end": 271,
              "raw": "'bar'",
              "value": "bar",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 285,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 285,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 282,
                "end": 285,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 282,
                  "end": 283,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 288,
            "end": 301,
            "arguments": [
              {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 288,
              "end": 298,
              "decorators": [],
              "name": "enumValues",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
