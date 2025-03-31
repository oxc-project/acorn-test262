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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "name": "format",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 23,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 45,
          "name": "Greeter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 168,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 50,
              "end": 116,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 81,
                "name": "greeting",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "value": {
                      "cooked": "employee",
                      "raw": "employee"
                    },
                    "tail": true
                  }
                ]
              },
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
                      "name": "format",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 58,
                        "end": 69,
                        "value": "Hello, %s",
                        "raw": "\"Hello, %s\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
                            "value": {
                              "cooked": "boss",
                              "raw": "boss"
                            },
                            "tail": true
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
                            "value": {
                              "cooked": "employee",
                              "raw": "employee"
                            },
                            "tail": true
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
