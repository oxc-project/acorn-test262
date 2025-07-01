__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inject",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 45
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 54,
                      "end": 57
                    },
                    "start": 52,
                    "end": 57
                  },
                  "start": 46,
                  "end": 57
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 64,
                      "end": 70
                    },
                    "start": 62,
                    "end": 70
                  },
                  "start": 59,
                  "end": 70
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 73,
                  "end": 77
                },
                "start": 71,
                "end": 77
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 78,
                "end": 81
              },
              "expression": false,
              "start": 30,
              "end": 81
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 23,
            "end": 81
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Leg",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 103
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 104,
                "end": 107
              },
              "abstract": false,
              "declare": false,
              "start": 94,
              "end": 107
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 87,
            "end": 107
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Person",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 132
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 150
                        },
                        "start": 143,
                        "end": 150
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leftLeg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 158
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Leg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 163
                        },
                        "typeArguments": null,
                        "start": 160,
                        "end": 163
                      },
                      "start": 158,
                      "end": 163
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 143,
                    "end": 164
                  }
                ],
                "start": 133,
                "end": 170
              },
              "abstract": false,
              "declare": false,
              "start": 120,
              "end": 170
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 113,
            "end": 170
          }
        ],
        "start": 16,
        "end": 173
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 173
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
