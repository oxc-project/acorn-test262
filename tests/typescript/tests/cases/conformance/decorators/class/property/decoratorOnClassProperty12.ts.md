__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 69,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 69,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 24,
            "end": 27,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 25,
                "end": 26,
                "name": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 36,
                  "end": 39
                }
              }
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 60,
              "decorators": [],
              "name": "propertyKey",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 54,
                  "end": 60
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 69,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 65,
              "end": 69
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 115,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 115,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 113,
            "decorators": [
              {
                "type": "Decorator",
                "start": 86,
                "end": 92,
                "expression": {
                  "type": "CallExpression",
                  "start": 87,
                  "end": 92,
                  "callee": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 90,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 102,
                "end": 113,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 102,
                    "end": 105,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 111,
                    "end": 113,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 105,
                    "end": 111
                  }
                ]
              }
            },
            "value": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
