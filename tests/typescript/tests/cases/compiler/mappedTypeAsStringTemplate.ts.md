__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "typeArguments": null,
                  "start": 59,
                  "end": 60
                },
                "start": 53,
                "end": 60
              },
              "nameType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 64,
                    "end": 67
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "y",
                      "cooked": "y"
                    },
                    "tail": true,
                    "start": 85,
                    "end": 88
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 74
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 75,
                            "end": 76
                          },
                          "typeArguments": null,
                          "start": 75,
                          "end": 76
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 78,
                          "end": 84
                        }
                      ],
                      "start": 74,
                      "end": 85
                    },
                    "start": 67,
                    "end": 85
                  }
                ],
                "start": 64,
                "end": 88
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              },
              "optional": false,
              "readonly": null,
              "start": 45,
              "end": 99
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 99
          }
        ],
        "start": 34,
        "end": 100
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foox",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "start": 105,
            "end": 108
          },
          "start": 101,
          "end": 108
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 110,
        "end": 113
      },
      "expression": false,
      "start": 22,
      "end": 113
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 128
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 130,
                  "end": 131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 127,
                "end": 131
              }
            ],
            "start": 125,
            "end": 133
          },
          "definite": false,
          "start": 121,
          "end": 133
        }
      ],
      "declare": false,
      "start": 115,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 139
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          }
        ],
        "optional": false,
        "start": 136,
        "end": 142
      },
      "directive": null,
      "start": 136,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 143
}
```
