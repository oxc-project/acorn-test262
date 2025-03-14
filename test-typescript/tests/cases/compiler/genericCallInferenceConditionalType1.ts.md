genericCallInferenceConditionalType1.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 321,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 120,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 120,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 74,
                "end": 120,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 98,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 81,
                        "end": 98,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 82,
                            "end": 86,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 83,
                              "end": 86,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 85,
                                "end": 86,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 85,
                                  "end": 86,
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
                          "start": 88,
                          "end": 98,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 91,
                            "end": 98
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 103,
                    "end": 120,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 104,
                        "end": 108,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 108,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 107,
                            "end": 108,
                            "typeName": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 108,
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
                      "start": 110,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 113,
                        "end": 120
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 74,
                  "end": 77,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 75,
                      "end": 76,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 76,
                        "decorators": [],
                        "name": "T",
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 184,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 184,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 139,
                "end": 184,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 159,
                    "end": 172,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 162,
                        "end": 172,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 164,
                            "end": 170,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 167,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 167,
                              "end": 170,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 169,
                                "end": 170,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 169,
                                  "end": 170,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 184,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 177,
                    "end": 184
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 139,
                  "end": 158,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 140,
                      "end": 157,
                      "const": false,
                      "constraint": {
                        "type": "TSUnknownKeyword",
                        "start": 150,
                        "end": 157
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 141,
                        "decorators": [],
                        "name": "T",
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 197,
            "end": 201,
            "arguments": [
              {
                "type": "Identifier",
                "start": 199,
                "end": 200,
                "decorators": [],
                "name": "g",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 204,
      "end": 277,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 223,
        "decorators": [],
        "name": "FirstParameter",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 229,
        "end": 276,
        "checkType": {
          "type": "TSTypeReference",
          "start": 229,
          "end": 230,
          "typeName": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 239,
          "end": 262,
          "params": [
            {
              "type": "Identifier",
              "start": 240,
              "end": 250,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 241,
                "end": 250,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 243,
                  "end": 250,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 249,
                    "end": 250,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 262,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 255,
              "end": 262
            }
          }
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 269,
          "end": 276
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 265,
          "end": 266,
          "typeName": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "decorators": [],
            "name": "P",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 223,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 279,
      "end": 320,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 288,
        "end": 319,
        "indexType": {
          "type": "TSLiteralType",
          "start": 313,
          "end": 318,
          "literal": {
            "type": "Literal",
            "start": 313,
            "end": 318,
            "raw": "\"foo\"",
            "value": "foo"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 288,
          "end": 312,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 302,
            "end": 312,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 303,
                "end": 311,
                "exprName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "h",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 288,
            "end": 302,
            "decorators": [],
            "name": "FirstParameter",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
