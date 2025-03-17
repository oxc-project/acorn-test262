__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 236,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 163,
      "body": {
        "type": "TSInterfaceBody",
        "start": 97,
        "end": 163,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 101,
            "end": 126,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 105,
                "end": 125,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 105,
                    "end": 108,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 112,
                    "end": 125,
                    "tail": true,
                    "value": {
                      "cooked": " without id",
                      "raw": " without id"
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 112,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 129,
            "end": 161,
            "params": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 140,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 143,
                "end": 160,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 143,
                    "end": 146,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 150,
                    "end": 160,
                    "tail": true,
                    "value": {
                      "cooked": " with id",
                      "raw": " with id"
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 146,
                    "end": 150,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 75,
        "decorators": [],
        "name": "Callable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 95,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 89,
              "end": 95
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 211,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 211,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 182,
                "end": 211,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 182,
                    "end": 195,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 190,
                      "end": 195,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 191,
                          "end": 194,
                          "literal": {
                            "type": "Literal",
                            "start": 191,
                            "end": 194,
                            "raw": "\"A\"",
                            "value": "A"
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 190,
                      "decorators": [],
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 211,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 206,
                      "end": 211,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 207,
                          "end": 210,
                          "literal": {
                            "type": "Literal",
                            "start": 207,
                            "end": 210,
                            "raw": "\"B\"",
                            "value": "B"
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 206,
                      "decorators": [],
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 213,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 228,
            "end": 234,
            "arguments": [
              {
                "type": "Literal",
                "start": 230,
                "end": 233,
                "raw": "123",
                "value": 123
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
