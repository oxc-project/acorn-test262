__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 210,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 33,
            "decorators": [],
            "name": "ng",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 16,
                "end": 33,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 16,
                  "end": 33,
                  "left": {
                    "type": "Identifier",
                    "start": 16,
                    "end": 18,
                    "decorators": [],
                    "name": "ng",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 33,
                    "decorators": [],
                    "name": "IAngularStatic",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 36,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "decorators": [],
        "name": "ng",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 194,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 110,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 66,
              "end": 110,
              "id": {
                "type": "Identifier",
                "start": 76,
                "end": 83,
                "decorators": [],
                "name": "IModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 84,
                "end": 110,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 92,
                    "end": 105,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 96,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 98,
                        "end": 104
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 192,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 122,
              "end": 192,
              "id": {
                "type": "Identifier",
                "start": 132,
                "end": 146,
                "decorators": [],
                "name": "IAngularStatic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 147,
                "end": 192,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 156,
                    "end": 187,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 162,
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 162,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 164,
                        "end": 186,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 165,
                            "end": 174,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 166,
                              "end": 174,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 168,
                                "end": 174
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 176,
                          "end": 186,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 179,
                            "end": 186,
                            "typeName": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 186,
                              "decorators": [],
                              "name": "IModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 196,
      "end": 208,
      "expression": {
        "type": "Identifier",
        "start": 205,
        "end": 207,
        "decorators": [],
        "name": "ng",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
