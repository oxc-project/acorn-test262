__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 122,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 122,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 23,
            "end": 68,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 53,
                "decorators": [],
                "name": "strings",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 53,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 53,
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 67,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 67,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 64,
                      "end": 66,
                      "members": []
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 63,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 73,
            "end": 120,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 106,
                "decorators": [],
                "name": "strings",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 86,
                    "end": 106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 106,
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 119,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 119,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 116,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 73,
              "end": 76,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 74,
                  "end": 75,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
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
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "IFooFn",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 151,
            "decorators": [],
            "name": "fooFn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 151,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 151,
                  "decorators": [],
                  "name": "IFooFn",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 154,
      "end": 204,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 177,
        "decorators": [],
        "name": "expect",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 196,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 196,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 196,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 188,
                "end": 196,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 189,
                    "end": 195
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 188,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 197,
        "end": 203,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 199,
          "end": 203
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 229,
        "arguments": [
          {
            "type": "TaggedTemplateExpression",
            "start": 213,
            "end": 228,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 226,
              "end": 228,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 226,
                  "end": 228,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 213,
              "end": 218,
              "decorators": [],
              "name": "fooFn",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 218,
              "end": 226,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 219,
                  "end": 225
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 212,
          "decorators": [],
          "name": "expect",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
