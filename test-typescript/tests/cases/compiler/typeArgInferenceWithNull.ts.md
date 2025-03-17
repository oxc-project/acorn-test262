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
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "name": "fn4",
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
          "start": 45,
          "end": 49,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
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
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 54,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
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
      "type": "ExpressionStatement",
      "start": 55,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 64,
        "callee": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 59,
            "end": 63,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 67,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "name": "fn5",
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
          "start": 105,
          "end": 109,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 109,
            "typeAnnotation": {
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 111,
        "end": 114,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 90,
              "end": 103,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 92,
                  "end": 101,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "type": "ExpressionStatement",
      "start": 115,
      "end": 132,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 131,
        "callee": {
          "type": "Identifier",
          "start": 115,
          "end": 118,
          "name": "fn5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 124,
                  "end": 128,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 134,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "name": "fn6",
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
          "start": 172,
          "end": 176,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
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
          "start": 178,
          "end": 197,
          "name": "fun",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 197,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 183,
              "end": 197,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 184,
                  "end": 188,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 188,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 187,
                      "end": 188,
                      "typeName": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
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
                "start": 190,
                "end": 197,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 193,
                  "end": 197
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 199,
          "end": 204,
          "name": "n2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 204,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 204,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
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
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 209,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 170,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 157,
              "end": 170,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 159,
                  "end": 168,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 162,
                      "end": 168
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "type": "ExpressionStatement",
      "start": 210,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 247,
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 213,
          "name": "fn6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 219,
                  "end": 223,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 227,
            "end": 235,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 232,
              "end": 235,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 242,
                  "end": 244,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
