__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 76,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 76,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 73,
                "end": 76
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
      "start": 79,
      "end": 146,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 86,
        "end": 146,
        "id": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 94,
          "end": 146,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 100,
              "end": 112,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 100,
                  "end": 104,
                  "expression": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 104,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "start": 106,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 108,
                  "end": 111
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 117,
              "end": 144,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 128,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 128,
                "end": 144,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 134,
                    "end": 140,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 137,
                        "end": 140
                      }
                    },
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 129,
                        "end": 133,
                        "expression": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 133,
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 142,
                  "end": 144,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
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
