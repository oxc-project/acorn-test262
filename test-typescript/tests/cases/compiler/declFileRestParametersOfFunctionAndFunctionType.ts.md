__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 238,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 12,
          "end": 19,
          "argument": {
            "type": "Identifier",
            "start": 15,
            "end": 19,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 36,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 37,
          "end": 57,
          "name": "x",
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
                  "argument": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 62,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 97,
          "name": "x",
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
                      "argument": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 88,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 102,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 149,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "argument": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 133,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 161,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 198,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "argument": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 182,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 205,
            "name": "f6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 208,
            "end": 235,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                        "expression": {
                          "type": "Literal",
                          "start": 229,
                          "end": 231,
                          "value": 10,
                          "raw": "10"
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 225,
                          "end": 228
                        }
                      }
                    ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
