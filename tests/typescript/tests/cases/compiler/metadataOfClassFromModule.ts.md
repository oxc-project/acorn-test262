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
        "start": 10,
        "end": 18
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
                "start": 42,
                "end": 48
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
                      "start": 57,
                      "end": 60
                    },
                    "start": 55,
                    "end": 60
                  },
                  "start": 49,
                  "end": 60
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
                      "start": 67,
                      "end": 73
                    },
                    "start": 65,
                    "end": 73
                  },
                  "start": 62,
                  "end": 73
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 76,
                  "end": 80
                },
                "start": 74,
                "end": 80
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 81,
                "end": 84
              },
              "expression": false,
              "start": 33,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 84
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
                "start": 103,
                "end": 106
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 107,
                "end": 110
              },
              "abstract": false,
              "declare": false,
              "start": 97,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 90,
            "end": 110
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
                "start": 129,
                "end": 135
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
                          "start": 147,
                          "end": 153
                        },
                        "start": 146,
                        "end": 153
                      }
                    ],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "leftLeg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 161
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
                          "start": 163,
                          "end": 166
                        },
                        "typeArguments": null,
                        "start": 163,
                        "end": 166
                      },
                      "start": 161,
                      "end": 166
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
                    "start": 146,
                    "end": 167
                  }
                ],
                "start": 136,
                "end": 173
              },
              "abstract": false,
              "declare": false,
              "start": 123,
              "end": 173
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 116,
            "end": 173
          }
        ],
        "start": 19,
        "end": 176
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
