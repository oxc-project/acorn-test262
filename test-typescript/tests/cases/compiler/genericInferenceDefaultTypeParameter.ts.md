__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "name": "Type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 62,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 43,
                "end": 62,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 44,
                    "end": 53,
                    "name": "e",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 47,
                        "end": 53
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 90,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 71,
                "end": 90,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 72,
                    "end": 81,
                    "name": "e",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 75,
                        "end": 81
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 95,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
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
          "type": "Identifier",
          "start": 143,
          "end": 157,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 157,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 150,
              "end": 157,
              "objectType": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "name": "Type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 142,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 141,
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
                  "name": "Type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                "value": "a",
                "raw": "\"a\""
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 158,
        "end": 164,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 160,
          "end": 164
        }
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
        "callee": {
          "type": "Identifier",
          "start": 167,
          "end": 169,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 170,
            "end": 182,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 170,
                "end": 175,
                "name": "event",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 179,
              "end": 182,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 207,
      "expression": {
        "type": "CallExpression",
        "start": 185,
        "end": 206,
        "callee": {
          "type": "Identifier",
          "start": 185,
          "end": 187,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 193,
            "end": 205,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 198,
                "name": "event",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 202,
              "end": 205,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
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
                "value": "a",
                "raw": "\"a\""
              }
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 229,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 210,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 216,
            "end": 228,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 221,
                "name": "event",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 225,
              "end": 228,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
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
                "value": "b",
                "raw": "\"b\""
              }
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
