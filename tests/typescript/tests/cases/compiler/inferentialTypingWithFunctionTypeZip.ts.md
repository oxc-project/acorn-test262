__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pair",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 11,
                        "end": 12
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 11,
                      "end": 12
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14,
                        "end": 15
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 14,
                      "end": 15
                    }
                  ],
                  "start": 10,
                  "end": 16
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                          "start": 20,
                          "end": 21
                        },
                        "typeArguments": null,
                        "start": 20,
                        "end": 21
                      },
                      "start": 18,
                      "end": 21
                    },
                    "start": 17,
                    "end": 21
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 30,
                              "end": 31
                            },
                            "typeArguments": null,
                            "start": 30,
                            "end": 31
                          },
                          "start": 28,
                          "end": 31
                        },
                        "start": 27,
                        "end": 31
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 38,
                              "end": 39
                            },
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
                                  "start": 41,
                                  "end": 42
                                },
                                "typeArguments": null,
                                "start": 41,
                                "end": 42
                              },
                              "start": 39,
                              "end": 42
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 38,
                            "end": 43
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 44,
                              "end": 45
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "S",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 47,
                                  "end": 48
                                },
                                "typeArguments": null,
                                "start": 47,
                                "end": 48
                              },
                              "start": 45,
                              "end": 48
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 44,
                            "end": 49
                          }
                        ],
                        "start": 36,
                        "end": 51
                      },
                      "start": 33,
                      "end": 51
                    },
                    "start": 26,
                    "end": 51
                  },
                  "start": 23,
                  "end": 51
                },
                "start": 10,
                "end": 51
              },
              "start": 8,
              "end": 51
            },
            "start": 4,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 51
        }
      ],
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipWith",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 66,
                        "end": 67
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 66,
                      "end": 67
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 70
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 69,
                      "end": 70
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 73
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 72,
                      "end": 73
                    }
                  ],
                  "start": 65,
                  "end": 74
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
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 78,
                            "end": 79
                          },
                          "typeArguments": null,
                          "start": 78,
                          "end": 79
                        },
                        "start": 78,
                        "end": 81
                      },
                      "start": 76,
                      "end": 81
                    },
                    "start": 75,
                    "end": 81
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 86,
                            "end": 87
                          },
                          "typeArguments": null,
                          "start": 86,
                          "end": 87
                        },
                        "start": 86,
                        "end": 89
                      },
                      "start": 84,
                      "end": 89
                    },
                    "start": 83,
                    "end": 89
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
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
                            "name": "x",
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
                                  "start": 98,
                                  "end": 99
                                },
                                "typeArguments": null,
                                "start": 98,
                                "end": 99
                              },
                              "start": 96,
                              "end": 99
                            },
                            "start": 95,
                            "end": 99
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "S",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 108,
                                      "end": 109
                                    },
                                    "typeArguments": null,
                                    "start": 108,
                                    "end": 109
                                  },
                                  "start": 106,
                                  "end": 109
                                },
                                "start": 105,
                                "end": 109
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
                                  "start": 114,
                                  "end": 115
                                },
                                "typeArguments": null,
                                "start": 114,
                                "end": 115
                              },
                              "start": 111,
                              "end": 115
                            },
                            "start": 104,
                            "end": 115
                          },
                          "start": 101,
                          "end": 115
                        },
                        "start": 94,
                        "end": 115
                      },
                      "start": 92,
                      "end": 115
                    },
                    "start": 91,
                    "end": 115
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 121
                      },
                      "typeArguments": null,
                      "start": 120,
                      "end": 121
                    },
                    "start": 120,
                    "end": 123
                  },
                  "start": 117,
                  "end": 123
                },
                "start": 65,
                "end": 123
              },
              "start": 63,
              "end": 123
            },
            "start": 56,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 123
        }
      ],
      "declare": false,
      "start": 52,
      "end": 124
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 135
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "zipWith",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 145
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 147,
                    "end": 148
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 150,
                    "end": 151
                  }
                ],
                "start": 146,
                "end": 152
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 155,
                    "end": 158
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 160,
                    "end": 163
                  }
                ],
                "start": 154,
                "end": 164
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "pair",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 170
              }
            ],
            "optional": false,
            "start": 138,
            "end": 171
          },
          "definite": false,
          "start": 129,
          "end": 171
        }
      ],
      "declare": false,
      "start": 125,
      "end": 172
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 178
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 187
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 188,
                "end": 189
              },
              "optional": false,
              "computed": true,
              "start": 181,
              "end": 190
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 192
            },
            "optional": false,
            "computed": false,
            "start": 181,
            "end": 192
          },
          "definite": false,
          "start": 177,
          "end": 192
        }
      ],
      "declare": false,
      "start": 173,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
