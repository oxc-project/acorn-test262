typeParameterCompatibilityAccrossDeclarations.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 56,
            "properties": [
              {
                "type": "Property",
                "start": 13,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 13,
                  "end": 14,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 16,
                  "end": 54,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 54,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 40,
                        "end": 52,
                        "argument": {
                          "type": "Literal",
                          "start": 47,
                          "end": 51,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 29,
                      "end": 33,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 30,
                        "end": 33,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 32,
                          "end": 33,
                          "typeName": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 33,
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
                    "start": 34,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 36,
                      "end": 37,
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 25,
                    "end": 28,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 26,
                        "end": 27,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 26,
                          "end": 27,
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
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "decorators": [],
            "name": "a2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 66,
            "end": 115,
            "properties": [
              {
                "type": "Property",
                "start": 71,
                "end": 113,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 74,
                  "end": 113,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 97,
                    "end": 113,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 99,
                        "end": 111,
                        "argument": {
                          "type": "Literal",
                          "start": 106,
                          "end": 110,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 84,
                      "end": 90,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 85,
                        "end": 90,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 87,
                          "end": 90
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 116,
      "end": 156,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 123,
        "end": 156,
        "body": {
          "type": "TSInterfaceBody",
          "start": 135,
          "end": 156,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 140,
              "end": 154,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 149,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 148,
                      "end": 149,
                      "typeName": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 153,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 152,
                  "end": 153,
                  "typeName": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 141,
                "end": 144,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 142,
                    "end": 143,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "decorators": [],
          "name": "I",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 157,
      "end": 199,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 164,
        "end": 199,
        "body": {
          "type": "TSInterfaceBody",
          "start": 177,
          "end": 199,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 182,
              "end": 197,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 184,
                  "end": 190,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 190,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 187,
                      "end": 190
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 191,
                "end": 196,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 193,
                  "end": 196
                }
              },
              "static": false
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 174,
          "end": 176,
          "decorators": [],
          "name": "I2",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 210,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "I",
                  "optional": false
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
      "start": 212,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 222,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 220,
                "end": 222,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 222,
                  "decorators": [],
                  "name": "I2",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 226,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 226,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 227,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "i",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 248,
      "expression": {
        "type": "AssignmentExpression",
        "start": 242,
        "end": 247,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 242,
          "end": 243,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 246,
          "end": 247,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 268,
      "expression": {
        "type": "AssignmentExpression",
        "start": 260,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 260,
          "end": 262,
          "decorators": [],
          "name": "a2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 265,
          "end": 267,
          "decorators": [],
          "name": "i2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 281,
      "end": 289,
      "expression": {
        "type": "AssignmentExpression",
        "start": 281,
        "end": 288,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 281,
          "end": 283,
          "decorators": [],
          "name": "i2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 286,
          "end": 288,
          "decorators": [],
          "name": "a2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
