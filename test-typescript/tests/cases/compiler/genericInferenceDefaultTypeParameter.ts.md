genericInferenceDefaultTypeParameter.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 231,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 93,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Type",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 34,
        "end": 93,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 63,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 62,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 43,
                "end": 62,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 44,
                    "end": 53,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 47,
                        "end": 53
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 58,
                    "end": 62
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 90,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 71,
                "end": 90,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 72,
                    "end": 81,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 75,
                        "end": 81
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 90,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 86,
                    "end": 90
                  }
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 95,
      "end": 165,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 157,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 157,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 150,
              "end": 157,
              "indexType": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "decorators": [],
                  "name": "Type",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 158,
        "end": 164,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 160,
          "end": 164
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 142,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 141,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 125,
              "end": 135,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 135,
                  "decorators": [],
                  "name": "Type",
                  "optional": false
                }
              }
            },
            "default": {
              "type": "TSLiteralType",
              "start": 138,
              "end": 141,
              "literal": {
                "type": "Literal",
                "start": 138,
                "end": 141,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
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
      "type": "ExpressionStatement",
      "start": 167,
      "end": 184,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 183,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 170,
            "end": 182,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 179,
              "end": 182,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 170,
                "end": 175,
                "decorators": [],
                "name": "event",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 167,
          "end": 169,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 207,
      "expression": {
        "type": "CallExpression",
        "start": 185,
        "end": 206,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 193,
            "end": 205,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 202,
              "end": 205,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 198,
                "decorators": [],
                "name": "event",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 185,
          "end": 187,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 187,
          "end": 192,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 188,
              "end": 191,
              "literal": {
                "type": "Literal",
                "start": 188,
                "end": 191,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 229,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 216,
            "end": 228,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 225,
              "end": 228,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 221,
                "decorators": [],
                "name": "event",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 210,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 210,
          "end": 215,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 211,
              "end": 214,
              "literal": {
                "type": "Literal",
                "start": 211,
                "end": 214,
                "raw": "\"b\"",
                "value": "b"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
