__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Comparable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
        "start": 24,
        "end": 60,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 30,
            "end": 58,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 39,
              "name": "compareTo",
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
                "start": 40,
                "end": 48,
                "name": "other",
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
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
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
      "start": 61,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 79,
        "name": "Comparer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 129,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 86,
            "end": 127,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 86,
              "end": 111,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 87,
                  "end": 110,
                  "name": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 110,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 107,
                      "name": "Comparable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
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
                "start": 112,
                "end": 116,
                "name": "x",
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
              },
              {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "name": "y",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 148,
            "name": "max2",
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
                  "name": "Comparer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 200,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "test": {
                      "type": "BinaryExpression",
                      "start": 171,
                      "end": 189,
                      "left": {
                        "type": "CallExpression",
                        "start": 171,
                        "end": 185,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 171,
                          "end": 182,
                          "object": {
                            "type": "Identifier",
                            "start": 171,
                            "end": 172,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 182,
                            "name": "compareTo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 188,
                        "end": 189,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "alternate": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 215,
            "name": "maxResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 218,
            "end": 228,
            "callee": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "name": "max2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 223,
                "end": 224,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 226,
                "end": 227,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
