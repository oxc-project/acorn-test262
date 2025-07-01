__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ng",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ng",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16,
                    "end": 18
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IAngularStatic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 33
                  },
                  "start": 16,
                  "end": 33
                },
                "typeArguments": null,
                "start": 16,
                "end": 33
              },
              "start": 14,
              "end": 33
            },
            "start": 12,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 33
        }
      ],
      "declare": true,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ng",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 53
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 83
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 96
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 98,
                        "end": 104
                      },
                      "start": 96,
                      "end": 104
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 92,
                    "end": 105
                  }
                ],
                "start": 84,
                "end": 110
              },
              "declare": false,
              "start": 66,
              "end": 110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 59,
            "end": 110
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IAngularStatic",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 146
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
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 162
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 168,
                                "end": 174
                              },
                              "start": 166,
                              "end": 174
                            },
                            "start": 165,
                            "end": 174
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 186
                            },
                            "typeArguments": null,
                            "start": 179,
                            "end": 186
                          },
                          "start": 176,
                          "end": 186
                        },
                        "start": 164,
                        "end": 186
                      },
                      "start": 162,
                      "end": 186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 156,
                    "end": 187
                  }
                ],
                "start": 147,
                "end": 192
              },
              "declare": false,
              "start": 122,
              "end": 192
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 115,
            "end": 192
          }
        ],
        "start": 54,
        "end": 194
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 36,
      "end": 194
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ng",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 207
      },
      "start": 196,
      "end": 208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 210
}
```
