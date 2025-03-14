__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 89,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 89,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 87,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "fold",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 44,
                "decorators": [],
                "name": "c",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 44,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 41,
                      "end": 44,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 42,
                          "end": 43,
                          "typeName": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 43,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 41,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 46,
                "end": 72,
                "decorators": [],
                "name": "folder",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 55,
                    "end": 72,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 56,
                        "end": 60,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 57,
                          "end": 60,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 59,
                            "end": 60,
                            "typeName": {
                              "type": "Identifier",
                              "start": 59,
                              "end": 60,
                              "decorators": [],
                              "name": "S",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 66,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 63,
                          "end": 66,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 65,
                            "end": 66,
                            "typeName": {
                              "type": "Identifier",
                              "start": 65,
                              "end": 66,
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
                      "start": 68,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 71,
                        "end": 72,
                        "typeName": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 72,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 74,
                "end": 82,
                "decorators": [],
                "name": "init",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 81,
                    "end": 82,
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
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
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 25,
              "end": 31,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 29,
                  "end": 30,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "S",
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
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Utils",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 107,
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 107,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 107,
                  "decorators": [],
                  "name": "Utils",
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
      "start": 110,
      "end": 123,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 122,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 110,
          "end": 120,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 115,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
            "decorators": [],
            "name": "fold",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 153,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 152,
        "arguments": [
          {
            "type": "Literal",
            "start": 147,
            "end": 151,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 136,
          "end": 146,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 136,
            "end": 141,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "fold",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 189,
      "expression": {
        "type": "CallExpression",
        "start": 166,
        "end": 188,
        "arguments": [
          {
            "type": "Literal",
            "start": 177,
            "end": 181,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 183,
            "end": 187,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 166,
          "end": 176,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 166,
            "end": 171,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 172,
            "end": 176,
            "decorators": [],
            "name": "fold",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 231,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 230,
        "arguments": [
          {
            "type": "Literal",
            "start": 213,
            "end": 217,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 219,
            "end": 223,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 225,
            "end": 229,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 212,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 207,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 208,
            "end": 212,
            "decorators": [],
            "name": "fold",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
