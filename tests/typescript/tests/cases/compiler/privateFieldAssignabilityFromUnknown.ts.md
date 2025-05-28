__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 36,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 36,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 34,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 29,
                "name": "field"
              },
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 72,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 55,
            "decorators": [],
            "name": "task",
            "optional": false,
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
                  "decorators": [],
                  "name": "Class",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
