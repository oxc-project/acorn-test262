__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 230,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "body": null,
      "expression": false
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
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 170,
            "end": 182,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 170,
                "end": 175,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 179,
              "end": 182,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 193,
            "end": 205,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 198,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 202,
              "end": 205,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 216,
            "end": 228,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 221,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 225,
              "end": 228,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
