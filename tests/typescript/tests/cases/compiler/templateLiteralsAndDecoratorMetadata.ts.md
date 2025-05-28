__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 23,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
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
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 168,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 32,
        "end": 168,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 45,
          "decorators": [],
          "name": "Greeter",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 168,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 50,
              "end": 116,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 50,
                  "end": 70,
                  "expression": {
                    "type": "CallExpression",
                    "start": 51,
                    "end": 70,
                    "callee": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 57,
                      "decorators": [],
                      "name": "format",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 58,
                        "end": 69,
                        "value": "Hello, %s",
                        "raw": "\"Hello, %s\""
                      }
                    ],
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 81,
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 102,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 83,
                  "end": 102,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 83,
                      "end": 89,
                      "literal": {
                        "type": "TemplateLiteral",
                        "start": 83,
                        "end": 89,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 83,
                            "end": 89,
                            "value": {
                              "cooked": "boss",
                              "raw": "boss"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": []
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 92,
                      "end": 102,
                      "literal": {
                        "type": "TemplateLiteral",
                        "start": 92,
                        "end": 102,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 92,
                            "end": 102,
                            "value": {
                              "cooked": "employee",
                              "raw": "employee"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": []
                      }
                    }
                  ]
                }
              },
              "value": {
                "type": "TemplateLiteral",
                "start": 105,
                "end": 115,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 105,
                    "end": 115,
                    "value": {
                      "cooked": "employee",
                      "raw": "employee"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
