__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 177,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 32,
              "end": 77,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 52,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 71,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 175,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 90,
              "end": 175,
              "id": {
                "type": "Identifier",
                "start": 100,
                "end": 106,
                "decorators": [],
                "name": "points",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 107,
                "end": 175,
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "start": 118,
                    "end": 139,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 119,
                        "end": 130,
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 122,
                          "end": 130,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 124,
                            "end": 130
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 131,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 133,
                        "end": 138,
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 138,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 148,
                    "end": 169,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 149,
                        "end": 160,
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 152,
                          "end": 160,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 154,
                            "end": 160
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 161,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 163,
                        "end": 168,
                        "typeName": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 168,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
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
