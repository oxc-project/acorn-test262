__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comparable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compareTo",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 39
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
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
                "start": 40,
                "end": 48
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 30,
            "end": 58
          }
        ],
        "start": 24,
        "end": 60
      },
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comparer",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 79
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 87,
                    "end": 88
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Comparable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 107
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 109
                          },
                          "typeArguments": null,
                          "start": 108,
                          "end": 109
                        }
                      ],
                      "start": 107,
                      "end": 110
                    },
                    "start": 97,
                    "end": 110
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 87,
                  "end": 110
                }
              ],
              "start": 86,
              "end": 111
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
                      "start": 115,
                      "end": 116
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 116
                  },
                  "start": 113,
                  "end": 116
                },
                "start": 112,
                "end": 116
              },
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 121,
                      "end": 122
                    },
                    "typeArguments": null,
                    "start": 121,
                    "end": 122
                  },
                  "start": 119,
                  "end": 122
                },
                "start": 118,
                "end": 122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "typeArguments": null,
                "start": 125,
                "end": 126
              },
              "start": 123,
              "end": 126
            },
            "start": 86,
            "end": 127
          }
        ],
        "start": 80,
        "end": 129
      },
      "declare": false,
      "start": 61,
      "end": 129
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
            "name": "max2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Comparer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 148
                },
                "typeArguments": null,
                "start": 140,
                "end": 148
              },
              "start": 138,
              "end": 148
            },
            "start": 134,
            "end": 148
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 172
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "compareTo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 182
                          },
                          "optional": false,
                          "computed": false,
                          "start": 171,
                          "end": 182
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 184
                          }
                        ],
                        "optional": false,
                        "start": 171,
                        "end": 185
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 188,
                        "end": 189
                      },
                      "start": 171,
                      "end": 189
                    },
                    "consequent": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "alternate": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "start": 170,
                    "end": 198
                  },
                  "start": 163,
                  "end": 198
                }
              ],
              "start": 161,
              "end": 200
            },
            "id": null,
            "generator": false,
            "start": 151,
            "end": 200
          },
          "definite": false,
          "start": 134,
          "end": 200
        }
      ],
      "declare": false,
      "start": 130,
      "end": 201
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
            "name": "maxResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 215
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "max2",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 222
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 223,
                "end": 224
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 226,
                "end": 227
              }
            ],
            "optional": false,
            "start": 218,
            "end": 228
          },
          "definite": false,
          "start": 206,
          "end": 228
        }
      ],
      "declare": false,
      "start": 202,
      "end": 229
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
