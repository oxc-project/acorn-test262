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
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 48,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 48,
              "body": {
                "type": "TSInterfaceBody",
                "start": 41,
                "end": 48,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "decorators": [],
                "name": "type",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 60,
            "end": 89,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 68,
              "end": 89,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 74,
                  "end": 87,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 78,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 86,
                          "decorators": [],
                          "name": "type",
                          "optional": false
                        }
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
