__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 36,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "name": "Class",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 36,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 34,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 29,
                "name": "field"
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 31,
                  "end": 34
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
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 55,
            "name": "task",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 55,
                  "name": "Class",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 58,
            "end": 71,
            "expression": {
              "type": "ObjectExpression",
              "start": 58,
              "end": 60,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 64,
              "end": 71
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
