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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 168,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 32,
        "end": 168,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 168,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 50,
              "end": 116,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 50,
                  "end": 70,
                  "expression": {
                    "type": "CallExpression",
                    "start": 51,
                    "end": 70,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 58,
                        "end": 69,
                        "raw": "\"Hello, %s\"",
                        "value": "Hello, %s"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 57,
                      "decorators": [],
                      "name": "format",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 81,
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
                        "expressions": [],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 83,
                            "end": 89,
                            "tail": true,
                            "value": {
                              "cooked": "boss",
                              "raw": "boss"
                            }
                          }
                        ]
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
                        "expressions": [],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 92,
                            "end": 102,
                            "tail": true,
                            "value": {
                              "cooked": "employee",
                              "raw": "employee"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              "value": {
                "type": "TemplateLiteral",
                "start": 105,
                "end": 115,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 105,
                    "end": 115,
                    "tail": true,
                    "value": {
                      "cooked": "employee",
                      "raw": "employee"
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
