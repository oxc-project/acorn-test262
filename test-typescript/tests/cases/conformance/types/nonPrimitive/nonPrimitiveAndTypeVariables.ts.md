__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 329,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 82,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 38,
        "end": 81,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 46,
          "end": 53,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 52,
            "end": 53,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 56,
          "end": 78,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 56,
            "end": 60,
            "indexType": {
              "type": "TSTypeReference",
              "start": 58,
              "end": 59,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 57,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 69,
            "end": 70,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 77,
            "end": 78,
            "literal": {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "raw": "0",
              "value": 0
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 73,
            "end": 74,
            "literal": {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "raw": "1",
              "value": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
      "type": "TSTypeAliasDeclaration",
      "start": 83,
      "end": 151,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 98,
        "end": 150,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 106,
          "end": 113,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 112,
            "end": 113,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 101,
          "end": 102,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 116,
          "end": 147,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 116,
            "end": 120,
            "indexType": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 117,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSUnionType",
            "start": 129,
            "end": 139,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 129,
                "end": 130,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSObjectKeyword",
                "start": 133,
                "end": 139
              }
            ]
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 146,
            "end": 147,
            "literal": {
              "type": "Literal",
              "start": 146,
              "end": 147,
              "raw": "0",
              "value": 0
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 142,
            "end": 143,
            "literal": {
              "type": "Literal",
              "start": 142,
              "end": 143,
              "raw": "1",
              "value": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 95,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 94,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
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
      "type": "VariableDeclaration",
      "start": 153,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 178,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 178,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 161,
                  "end": 178,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 162,
                      "end": 174,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 164,
                          "end": 172,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 165,
                            "end": 172,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 167,
                              "end": 172,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 167,
                                  "end": 168,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 167,
                                    "end": 168,
                                    "raw": "0",
                                    "value": 0
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 171,
                                  "end": 172,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 171,
                                    "end": 172,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 176,
                      "end": 177,
                      "literal": {
                        "type": "Literal",
                        "start": 176,
                        "end": 177,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 181,
            "end": 189,
            "properties": [
              {
                "type": "Property",
                "start": 183,
                "end": 187,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 186,
                  "end": 187,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 216,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 216,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 199,
                  "end": 216,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 200,
                      "end": 212,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 202,
                          "end": 210,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 203,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 203,
                            "end": 210,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 205,
                              "end": 210,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 205,
                                  "end": 206,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 205,
                                    "end": 206,
                                    "raw": "0",
                                    "value": 0
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 209,
                                  "end": 210,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 209,
                                    "end": 210,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 214,
                      "end": 215,
                      "literal": {
                        "type": "Literal",
                        "start": 214,
                        "end": 215,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 219,
            "end": 227,
            "properties": [
              {
                "type": "Property",
                "start": 221,
                "end": 225,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 225,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 328,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 255,
        "end": 328,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 261,
            "end": 279,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 278,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 274,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 266,
                    "end": 274,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 268,
                      "end": 274
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 278,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 294,
            "end": 316,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 315,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 311,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 299,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 301,
                      "end": 311,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 301,
                          "end": 302,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 302,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSObjectKeyword",
                          "start": 305,
                          "end": 311
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 242,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 249,
          "end": 253,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 253,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 253,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 242,
        "end": 248,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 243,
            "end": 244,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 246,
            "end": 247,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
