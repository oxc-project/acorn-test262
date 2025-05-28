__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 51,
            "decorators": [],
            "name": "pair",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 51,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 10,
                "end": 51,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 10,
                  "end": 16,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 11,
                      "end": 12,
                      "name": {
                        "type": "Identifier",
                        "start": 11,
                        "end": 12,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 14,
                      "end": 15,
                      "name": {
                        "type": "Identifier",
                        "start": 14,
                        "end": 15,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 17,
                    "end": 21,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 18,
                      "end": 21,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 20,
                        "end": 21,
                        "typeName": {
                          "type": "Identifier",
                          "start": 20,
                          "end": 21,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 26,
                    "end": 51,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 31,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 28,
                          "end": 31,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 30,
                            "end": 31,
                            "typeName": {
                              "type": "Identifier",
                              "start": 30,
                              "end": 31,
                              "decorators": [],
                              "name": "S",
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
                      "start": 33,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 36,
                        "end": 51,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 38,
                            "end": 43,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 38,
                              "end": 39,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 39,
                              "end": 42,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 41,
                                "end": 42,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 41,
                                  "end": 42,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 44,
                            "end": 49,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 44,
                              "end": 45,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 45,
                              "end": 48,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 47,
                                "end": 48,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 47,
                                  "end": 48,
                                  "decorators": [],
                                  "name": "S",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 124,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 123,
            "decorators": [],
            "name": "zipWith",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 123,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 65,
                "end": 123,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 65,
                  "end": 74,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 66,
                      "end": 67,
                      "name": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 69,
                      "end": 70,
                      "name": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 72,
                      "end": 73,
                      "name": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 75,
                    "end": 81,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 78,
                        "end": 81,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 78,
                          "end": 79,
                          "typeName": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 79,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 83,
                    "end": 89,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 86,
                        "end": 89,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 86,
                          "end": 87,
                          "typeName": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 87,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 115,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 94,
                        "end": 115,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 95,
                            "end": 99,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 96,
                              "end": 99,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 98,
                                "end": 99,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 98,
                                  "end": 99,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 101,
                          "end": 115,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 104,
                            "end": 115,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 105,
                                "end": 109,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 106,
                                  "end": 109,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 108,
                                    "end": 109,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 108,
                                      "end": 109,
                                      "decorators": [],
                                      "name": "S",
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
                              "start": 111,
                              "end": 115,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 114,
                                "end": 115,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 114,
                                  "end": 115,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 117,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 120,
                    "end": 123,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 172,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 135,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 138,
            "end": 171,
            "callee": {
              "type": "Identifier",
              "start": 138,
              "end": 145,
              "decorators": [],
              "name": "zipWith",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 146,
                "end": 152,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 147,
                    "end": 148,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 150,
                    "end": 151,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 154,
                "end": 164,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 155,
                    "end": 158,
                    "value": "a",
                    "raw": "'a'"
                  },
                  {
                    "type": "Literal",
                    "start": 160,
                    "end": 163,
                    "value": "b",
                    "raw": "'b'"
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 166,
                "end": 170,
                "decorators": [],
                "name": "pair",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 193,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 181,
            "end": 192,
            "object": {
              "type": "MemberExpression",
              "start": 181,
              "end": 190,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 187,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "property": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "x",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
