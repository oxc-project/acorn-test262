__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 12,
          "end": 19,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 24,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 36,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 37,
          "end": 57,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 57,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 40,
              "end": 57,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 41,
                  "end": 48,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 53,
                  "end": 57
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 62,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 97,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 97,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 78,
              "end": 97,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 80,
                  "end": 95,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 81,
                      "end": 88,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 88,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 91,
                      "end": 95
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 102,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 143,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 142,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 125,
              "end": 142,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 126,
                  "end": 133,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 133,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 138,
                  "end": 142
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 161,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 191,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 172,
              "end": 191,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 174,
                  "end": 189,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 175,
                      "end": 182,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 182,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 185,
                      "end": 189
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 198,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 235,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 205,
            "decorators": [],
            "name": "f6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 208,
            "end": 235,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 214,
              "end": 235,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 216,
                  "end": 233,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 223,
                    "end": 232,
                    "elements": [
                      {
                        "type": "TSTypeAssertion",
                        "start": 224,
                        "end": 231,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 225,
                          "end": 228
                        },
                        "expression": {
                          "type": "Literal",
                          "start": 229,
                          "end": 231,
                          "value": 10,
                          "raw": "10"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
