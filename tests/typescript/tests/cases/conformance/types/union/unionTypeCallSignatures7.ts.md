__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callable",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 75
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 89,
              "end": 95
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 95
          }
        ],
        "start": 75,
        "end": 96
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 105,
                    "end": 108
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " without id",
                      "cooked": " without id"
                    },
                    "tail": true,
                    "start": 112,
                    "end": 125
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 112
                    },
                    "typeArguments": null,
                    "start": 108,
                    "end": 112
                  }
                ],
                "start": 105,
                "end": 125
              },
              "start": 103,
              "end": 125
            },
            "start": 101,
            "end": 126
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 130,
                "end": 140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 143,
                    "end": 146
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " with id",
                      "cooked": " with id"
                    },
                    "tail": true,
                    "start": 150,
                    "end": 160
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 150
                    },
                    "typeArguments": null,
                    "start": 146,
                    "end": 150
                  }
                ],
                "start": 143,
                "end": 160
              },
              "start": 141,
              "end": 160
            },
            "start": 129,
            "end": 161
          }
        ],
        "start": 97,
        "end": 163
      },
      "declare": false,
      "start": 57,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 190
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 191,
                            "end": 194
                          },
                          "start": 191,
                          "end": 194
                        }
                      ],
                      "start": 190,
                      "end": 195
                    },
                    "start": 182,
                    "end": 195
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Callable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 206
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 207,
                            "end": 210
                          },
                          "start": 207,
                          "end": 210
                        }
                      ],
                      "start": 206,
                      "end": 211
                    },
                    "start": 198,
                    "end": 211
                  }
                ],
                "start": 182,
                "end": 211
              },
              "start": 180,
              "end": 211
            },
            "start": 179,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 211
        }
      ],
      "declare": true,
      "start": 165,
      "end": 212
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 225
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 230,
                "end": 233
              }
            ],
            "optional": false,
            "start": 228,
            "end": 234
          },
          "definite": false,
          "start": 219,
          "end": 234
        }
      ],
      "declare": false,
      "start": 213,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 235
}
```
