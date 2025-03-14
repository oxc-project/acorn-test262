metadataOfClassFromModule.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 173,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 81,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 30,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 81,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 45,
                "decorators": [],
                "name": "inject",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 57,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 54,
                      "end": 57
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 70,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 64,
                      "end": 70
                    }
                  }
                }
              ],
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 87,
            "end": 107,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 94,
              "end": 107,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 104,
                "end": 107,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "Leg",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 113,
            "end": 170,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 120,
              "end": 170,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 133,
                "end": 170,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 143,
                    "end": 164,
                    "computed": false,
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 143,
                        "end": 150,
                        "expression": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 150,
                          "decorators": [],
                          "name": "inject",
                          "optional": false
                        }
                      }
                    ],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 158,
                      "decorators": [],
                      "name": "leftLeg",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "Leg",
                          "optional": false
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
                "start": 126,
                "end": 132,
                "decorators": [],
                "name": "Person",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "MyModule",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
