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
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 31
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 43
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    },
                    "start": 43,
                    "end": 51
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 42,
                  "end": 52
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    },
                    "start": 62,
                    "end": 70
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 71
                }
              ],
              "start": 32,
              "end": 77
            },
            "declare": false,
            "start": 16,
            "end": 77
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "points",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 106
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
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
                            "start": 124,
                            "end": 130
                          },
                          "start": 122,
                          "end": 130
                        },
                        "start": 119,
                        "end": 130
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
                          "start": 133,
                          "end": 138
                        },
                        "typeArguments": null,
                        "start": 133,
                        "end": 138
                      },
                      "start": 131,
                      "end": 138
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 118,
                    "end": 139
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
                            "start": 154,
                            "end": 160
                          },
                          "start": 152,
                          "end": 160
                        },
                        "start": 149,
                        "end": 160
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
                          "start": 163,
                          "end": 168
                        },
                        "typeArguments": null,
                        "start": 163,
                        "end": 168
                      },
                      "start": 161,
                      "end": 168
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 148,
                    "end": 169
                  }
                ],
                "start": 107,
                "end": 175
              },
              "declare": false,
              "start": 90,
              "end": 175
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 83,
            "end": 175
          }
        ],
        "start": 9,
        "end": 177
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
