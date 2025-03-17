__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 317,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 54,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 54,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
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
        "start": 26,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 43,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 64,
        "arguments": [
          {
            "type": "Literal",
            "start": 59,
            "end": 63,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 67,
      "end": 114,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 111,
        "end": 114,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 105,
          "end": 109,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 109,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 109,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
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
        "start": 79,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 103,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 90,
              "end": 103,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 92,
                  "end": 101,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 132,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 131,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 119,
            "end": 130,
            "properties": [
              {
                "type": "Property",
                "start": 121,
                "end": 128,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 124,
                  "end": 128,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 134,
      "end": 209,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 209,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 172,
          "end": 176,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 176,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 178,
          "end": 197,
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 197,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 183,
              "end": 197,
              "params": [
                {
                  "type": "Identifier",
                  "start": 184,
                  "end": 188,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 188,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 187,
                      "end": 188,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 190,
                "end": 197,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 193,
                  "end": 197
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 199,
          "end": 204,
          "decorators": [],
          "name": "n2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 204,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 204,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
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
        "start": 146,
        "end": 171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 170,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 157,
              "end": 170,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 159,
                  "end": 168,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 162,
                      "end": 168
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 248,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 247,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 214,
            "end": 225,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 223,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 219,
                  "end": 223,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 227,
            "end": 235,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 232,
              "end": 235,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ObjectExpression",
            "start": 237,
            "end": 246,
            "properties": [
              {
                "type": "Property",
                "start": 239,
                "end": 244,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 242,
                  "end": 244,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 213,
          "decorators": [],
          "name": "fn6",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
