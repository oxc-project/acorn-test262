maxConstraints.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 60,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 60,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 30,
            "end": 58,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 39,
              "decorators": [],
              "name": "compareTo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 48,
                "decorators": [],
                "name": "other",
                "optional": false,
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
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
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
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Comparable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 129,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 86,
            "end": 127,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 116,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 116,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 119,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 121,
                    "end": 122,
                    "typeName": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
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
              "start": 123,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 86,
              "end": 111,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 87,
                  "end": 110,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 110,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 107,
                      "end": 110,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 108,
                          "end": 109,
                          "typeName": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 109,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 107,
                      "decorators": [],
                      "name": "Comparable",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
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
        "start": 71,
        "end": 79,
        "decorators": [],
        "name": "Comparer",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 148,
            "decorators": [],
            "name": "max2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 148,
                  "decorators": [],
                  "name": "Comparer",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 200,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 161,
              "end": 200,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 163,
                  "end": 198,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 170,
                    "end": 198,
                    "alternate": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 171,
                      "end": 189,
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "start": 171,
                        "end": 185,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 171,
                          "end": 182,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 171,
                            "end": 172,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 182,
                            "decorators": [],
                            "name": "compareTo",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 188,
                        "end": 189,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "y",
                "optional": false
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
      "start": 202,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 215,
            "decorators": [],
            "name": "maxResult",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 218,
            "end": 228,
            "arguments": [
              {
                "type": "Literal",
                "start": 223,
                "end": 224,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 226,
                "end": 227,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "decorators": [],
              "name": "max2",
              "optional": false
            },
            "optional": false
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
