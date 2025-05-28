__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 65,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 65,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 63,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 21,
                  "end": 30,
                  "expression": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 30,
                    "decorators": [],
                    "name": "Decorate",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "decorators": [],
                "name": "member",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 62,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 62,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 46,
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 46,
                    "end": 62,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 47,
                        "end": 53
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    ]
                  }
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
