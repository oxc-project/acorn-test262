__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 144,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "name": "foo",
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
          "start": 101,
          "end": 108,
          "name": "foox",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
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
        "start": 110,
        "end": 113,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 45,
              "end": 99,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 48,
                "end": 60,
                "name": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 53,
                  "end": 60,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 59,
                    "end": 60,
                    "typeName": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
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
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 85,
                    "end": 88,
                    "value": {
                      "cooked": "y",
                      "raw": "y"
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 67,
                    "end": 85,
                    "typeName": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 74,
                      "name": "Extract",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 74,
                      "end": 85,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 75,
                          "end": 76,
                          "typeName": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 76,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 78,
                          "end": 84
                        }
                      ]
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 53,
                "end": 60,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 59,
                  "end": 60,
                  "typeName": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "type": "VariableDeclaration",
      "start": 115,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 130,
                  "end": 131,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 143,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 142,
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 139,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
