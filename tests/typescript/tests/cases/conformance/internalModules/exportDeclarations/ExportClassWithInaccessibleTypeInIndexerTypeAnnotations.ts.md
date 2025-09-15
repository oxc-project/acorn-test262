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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
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
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 42
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    },
                    "start": 42,
                    "end": 50
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
                  "start": 41,
                  "end": 51
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 61
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    },
                    "start": 61,
                    "end": 69
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
                  "start": 60,
                  "end": 70
                }
              ],
              "start": 31,
              "end": 76
            },
            "abstract": false,
            "declare": false,
            "start": 19,
            "end": 76
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "points",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 101
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 119,
                            "end": 125
                          },
                          "start": 117,
                          "end": 125
                        },
                        "start": 114,
                        "end": 125
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 133
                        },
                        "typeArguments": null,
                        "start": 128,
                        "end": 133
                      },
                      "start": 126,
                      "end": 133
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 113,
                    "end": 134
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 149,
                            "end": 155
                          },
                          "start": 147,
                          "end": 155
                        },
                        "start": 144,
                        "end": 155
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 163
                        },
                        "typeArguments": null,
                        "start": 158,
                        "end": 163
                      },
                      "start": 156,
                      "end": 163
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 143,
                    "end": 164
                  }
                ],
                "start": 102,
                "end": 170
              },
              "abstract": false,
              "declare": false,
              "start": 89,
              "end": 170
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 82,
            "end": 170
          }
        ],
        "start": 12,
        "end": 172
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
