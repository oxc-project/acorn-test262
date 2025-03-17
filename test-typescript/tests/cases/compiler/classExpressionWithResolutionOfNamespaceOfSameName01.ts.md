__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 48,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 48,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 41,
                "end": 48,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 60,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 68,
              "end": 89,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 74,
                  "end": 87,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 78,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 80,
                      "end": 86,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 80,
                        "end": 86,
                        "left": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 86,
                          "name": "type",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
