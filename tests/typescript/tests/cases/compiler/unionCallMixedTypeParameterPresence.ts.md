__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 70,
        "end": 73
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 80,
                  "end": 81
                }
              ],
              "start": 79,
              "end": 82
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "err",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 92,
                              "end": 93
                            },
                            "typeArguments": null,
                            "start": 92,
                            "end": 93
                          },
                          "start": 90,
                          "end": 93
                        },
                        "start": 87,
                        "end": 93
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 99
                        },
                        "typeArguments": null,
                        "start": 98,
                        "end": 99
                      },
                      "start": 95,
                      "end": 99
                    },
                    "start": 86,
                    "end": 99
                  },
                  "start": 84,
                  "end": 99
                },
                "start": 83,
                "end": 99
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Err",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 105
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 107
                      },
                      "typeArguments": null,
                      "start": 106,
                      "end": 107
                    }
                  ],
                  "start": 105,
                  "end": 108
                },
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 78,
            "end": 109
          }
        ],
        "start": 74,
        "end": 111
      },
      "declare": false,
      "start": 57,
      "end": 111
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ok",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 124
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 126
          }
        ],
        "start": 124,
        "end": 127
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "err",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 143,
                              "end": 144
                            },
                            "typeArguments": null,
                            "start": 143,
                            "end": 144
                          },
                          "start": 141,
                          "end": 144
                        },
                        "start": 138,
                        "end": 144
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 149,
                        "end": 156
                      },
                      "start": 146,
                      "end": 156
                    },
                    "start": 137,
                    "end": 156
                  },
                  "start": 135,
                  "end": 156
                },
                "start": 134,
                "end": 156
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Err",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 162
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "typeArguments": null,
                      "start": 163,
                      "end": 164
                    }
                  ],
                  "start": 162,
                  "end": 165
                },
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 132,
            "end": 166
          }
        ],
        "start": 128,
        "end": 168
      },
      "declare": false,
      "start": 112,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Err",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 189
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 190,
                            "end": 191
                          },
                          "start": 190,
                          "end": 191
                        }
                      ],
                      "start": 189,
                      "end": 192
                    },
                    "start": 186,
                    "end": 192
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Err",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 198
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 199,
                            "end": 200
                          },
                          "start": 199,
                          "end": 200
                        }
                      ],
                      "start": 198,
                      "end": 201
                    },
                    "start": 195,
                    "end": 201
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ok",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 206
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 207,
                            "end": 208
                          },
                          "start": 207,
                          "end": 208
                        }
                      ],
                      "start": 206,
                      "end": 209
                    },
                    "start": 204,
                    "end": 209
                  }
                ],
                "start": 186,
                "end": 209
              },
              "start": 184,
              "end": 209
            },
            "start": 183,
            "end": 209
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 209
        }
      ],
      "declare": true,
      "start": 169,
      "end": 210
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 219
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 225
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 228
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 234
                },
                "id": null,
                "generator": false,
                "start": 226,
                "end": 234
              }
            ],
            "optional": false,
            "start": 222,
            "end": 235
          },
          "definite": false,
          "start": 217,
          "end": 235
        }
      ],
      "declare": false,
      "start": 211,
      "end": 236
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 236
}
```
