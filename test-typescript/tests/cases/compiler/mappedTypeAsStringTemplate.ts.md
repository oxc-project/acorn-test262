__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 143,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 113,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 113,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 101,
          "end": 108,
          "decorators": [],
          "name": "foox",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
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
        "start": 34,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 99,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 45,
              "end": 99,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 53,
                "end": 60,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 59,
                  "end": 60,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "start": 64,
                "end": 88,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 64,
                    "end": 67,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 85,
                    "end": 88,
                    "tail": true,
                    "value": {
                      "cooked": "y",
                      "raw": "y"
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 67,
                    "end": 85,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 74,
                      "end": 85,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 75,
                          "end": 76,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 76,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 78,
                          "end": 84
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 74,
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "optional": false,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
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
      "type": "VariableDeclaration",
      "start": 115,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 125,
            "end": 133,
            "properties": [
              {
                "type": "Property",
                "start": 127,
                "end": 131,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
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
                  "start": 130,
                  "end": 131,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 143,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 142,
        "arguments": [
          {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 139,
          "decorators": [],
          "name": "foo",
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
