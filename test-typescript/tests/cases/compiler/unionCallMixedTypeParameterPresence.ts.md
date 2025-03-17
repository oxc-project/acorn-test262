__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 237,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "name": "Err",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
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
        "start": 74,
        "end": 111,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 78,
            "end": 109,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 79,
              "end": 82,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 80,
                  "end": 81,
                  "name": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 83,
                "end": 99,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 86,
                    "end": 99,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 87,
                        "end": 93,
                        "name": "err",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 90,
                          "end": 93,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 93,
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 93,
                              "name": "T",
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
                      "start": 95,
                      "end": 99,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "name": "U",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "name": "Err",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 105,
                  "end": 108,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 106,
                      "end": 107,
                      "typeName": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 107,
                        "name": "U",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 124,
        "name": "Ok",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 126,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
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
        "start": 128,
        "end": 168,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 132,
            "end": 166,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 156,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 137,
                    "end": 156,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 138,
                        "end": 144,
                        "name": "err",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 141,
                          "end": 144,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 143,
                            "end": 144,
                            "typeName": {
                              "type": "Identifier",
                              "start": 143,
                              "end": 144,
                              "name": "T",
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
                      "start": 146,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 149,
                        "end": 156
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 165,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 162,
                  "name": "Err",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 162,
                  "end": 165,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 163,
                      "end": 164,
                      "typeName": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 209,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 209,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 186,
                "end": 209,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 186,
                    "end": 192,
                    "typeName": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 189,
                      "name": "Err",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 189,
                      "end": 192,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 190,
                          "end": 191,
                          "literal": {
                            "type": "Literal",
                            "start": 190,
                            "end": 191,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 201,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 198,
                      "name": "Err",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 198,
                      "end": 201,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 199,
                          "end": 200,
                          "literal": {
                            "type": "Literal",
                            "start": 199,
                            "end": 200,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 204,
                    "end": 209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 206,
                      "name": "Ok",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 206,
                      "end": 209,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 207,
                          "end": 208,
                          "literal": {
                            "type": "Literal",
                            "start": 207,
                            "end": 208,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "name": "e2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 222,
            "end": 235,
            "callee": {
              "type": "MemberExpression",
              "start": 222,
              "end": 225,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 226,
                "end": 234,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
