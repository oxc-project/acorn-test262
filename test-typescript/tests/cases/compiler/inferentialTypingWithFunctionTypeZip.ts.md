inferentialTypingWithFunctionTypeZip.ts
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 51,
          "definite": false,
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
                          "optional": false
                        }
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
                              "optional": false
                            }
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
                            "key": {
                              "type": "Identifier",
                              "start": 38,
                              "end": 39,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
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
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 44,
                            "end": 49,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 44,
                              "end": 45,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
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
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 10,
                  "end": 16,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 11,
                      "end": 12,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 11,
                        "end": 12,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 14,
                      "end": 15,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 14,
                        "end": 15,
                        "decorators": [],
                        "name": "S",
                        "optional": false
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 123,
          "definite": false,
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
                            "optional": false
                          }
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
                            "optional": false
                          }
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
                                  "optional": false
                                }
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
                                      "optional": false
                                    }
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
                                  "optional": false
                                }
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
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 65,
                  "end": 74,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 66,
                      "end": 67,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 69,
                      "end": 70,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 72,
                      "end": 73,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 135,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 138,
            "end": 171,
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
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 150,
                    "end": 151,
                    "raw": "2",
                    "value": 2
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
                    "raw": "'a'",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 160,
                    "end": 163,
                    "raw": "'b'",
                    "value": "b"
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 166,
                "end": 170,
                "decorators": [],
                "name": "pair",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 138,
              "end": 145,
              "decorators": [],
              "name": "zipWith",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 181,
            "end": 192,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 181,
              "end": 190,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 187,
                "decorators": [],
                "name": "result",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 188,
                "end": 189,
                "raw": "0",
                "value": 0
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
