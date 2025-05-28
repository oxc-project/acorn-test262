__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 235,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 163,
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
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 89,
              "end": 95
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 97,
        "end": 163,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 101,
            "end": 126,
            "typeParameters": null,
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
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 112,
                    "end": 125,
                    "value": {
                      "cooked": " without id",
                      "raw": " without id"
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 112,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 112,
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 129,
            "end": 161,
            "typeParameters": null,
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
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 150,
                    "end": 160,
                    "value": {
                      "cooked": " with id",
                      "raw": " with id"
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 146,
                    "end": 150,
                    "typeName": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 212,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 211,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 190,
                      "decorators": [],
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "value": "A",
                            "raw": "\"A\""
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 206,
                      "decorators": [],
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "value": "B",
                            "raw": "\"B\""
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 235,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 234,
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
            "callee": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 230,
                "end": 233,
                "value": 123,
                "raw": "123"
              }
            ],
            "optional": false
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
