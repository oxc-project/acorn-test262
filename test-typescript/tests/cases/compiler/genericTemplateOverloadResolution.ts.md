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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "IFooFn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 122,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 23,
            "end": 68,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 53,
                "name": "strings",
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
                      "name": "TemplateStringsArray",
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
              "start": 54,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 63,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 73,
            "end": 120,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 73,
              "end": 76,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 74,
                  "end": 75,
                  "name": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
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
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 106,
                "name": "strings",
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
                      "name": "TemplateStringsArray",
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
              "start": 107,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 116,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 151,
            "name": "fooFn",
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
                  "name": "IFooFn",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 154,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 177,
        "name": "expect",
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
          "start": 178,
          "end": 196,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 196,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 196,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 188,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 212,
          "name": "expect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TaggedTemplateExpression",
            "start": 213,
            "end": 228,
            "tag": {
              "type": "Identifier",
              "start": 213,
              "end": 218,
              "name": "fooFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
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
