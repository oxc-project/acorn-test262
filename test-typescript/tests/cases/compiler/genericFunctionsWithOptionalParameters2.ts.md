genericFunctionsWithOptionalParameters2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 88,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 88,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 86,
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
                "end": 43,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 35,
                    "end": 43,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 40,
                      "end": 43,
                      "params": [
                        {
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
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 40,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 45,
                "end": 71,
                "decorators": [],
                "name": "folder",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 54,
                    "end": 71,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 55,
                        "end": 59,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 56,
                          "end": 59,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 58,
                            "end": 59,
                            "typeName": {
                              "type": "Identifier",
                              "start": 58,
                              "end": 59,
                              "decorators": [],
                              "name": "S",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 65,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 65,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 64,
                            "end": 65,
                            "typeName": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 65,
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
                      "start": 67,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 70,
                        "end": 71,
                        "typeName": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
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
                "start": 73,
                "end": 81,
                "decorators": [],
                "name": "init",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 80,
                    "end": 81,
                    "typeName": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
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
              "start": 82,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
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
      "start": 90,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 106,
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
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
      "start": 109,
      "end": 122,
      "expression": {
        "type": "CallExpression",
        "start": 109,
        "end": 121,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 109,
          "end": 119,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 114,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
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
      "start": 132,
      "end": 149,
      "expression": {
        "type": "CallExpression",
        "start": 132,
        "end": 148,
        "arguments": [
          {
            "type": "Literal",
            "start": 143,
            "end": 147,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 132,
          "end": 142,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
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
      "start": 162,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 184,
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 177,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 179,
            "end": 183,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 172,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 167,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 168,
            "end": 172,
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
      "start": 198,
      "end": 227,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 226,
        "arguments": [
          {
            "type": "Literal",
            "start": 209,
            "end": 213,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 215,
            "end": 219,
            "raw": "null",
            "value": null
          },
          {
            "type": "Literal",
            "start": 221,
            "end": 225,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 198,
          "end": 208,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 198,
            "end": 203,
            "decorators": [],
            "name": "utils",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 208,
            "decorators": [],
            "name": "fold",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
