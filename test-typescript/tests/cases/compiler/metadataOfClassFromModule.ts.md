__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "MyModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 173,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 81,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 30,
              "end": 81,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 45,
                "name": "inject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 57,
                  "name": "target",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 54,
                      "end": 57
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 70,
                  "name": "key",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 64,
                      "end": 70
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 81,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 73,
                  "end": 77
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 87,
            "end": 107,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 94,
              "end": 107,
              "id": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "name": "Leg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 104,
                "end": 107,
                "body": []
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
            "type": "ExportNamedDeclaration",
            "start": 113,
            "end": 170,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 120,
              "end": 170,
              "id": {
                "type": "Identifier",
                "start": 126,
                "end": 132,
                "name": "Person",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 133,
                "end": 170,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 143,
                    "end": 164,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 158,
                      "name": "leftLeg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 143,
                        "end": 150,
                        "expression": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 150,
                          "name": "inject",
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
                      "start": 158,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 160,
                        "end": 163,
                        "typeName": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 163,
                          "name": "Leg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
