__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
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
                "name": "preFetch",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 38,
                          "end": 40
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 49,
                            "end": 51
                          },
                          "typeArguments": null,
                          "start": 49,
                          "end": 51
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 38,
                        "end": 51
                      }
                    ],
                    "start": 37,
                    "end": 52
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 57,
                            "end": 59
                          },
                          "typeArguments": null,
                          "start": 57,
                          "end": 59
                        },
                        "start": 55,
                        "end": 59
                      },
                      "start": 54,
                      "end": 59
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 64,
                      "end": 68
                    },
                    "start": 61,
                    "end": 68
                  },
                  "start": 37,
                  "end": 68
                },
                "start": 35,
                "end": 68
              },
              "accessibility": null,
              "static": false,
              "start": 27,
              "end": 69
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "preFetcher",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 110
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "abstract": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 119
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 128,
                            "end": 130
                          },
                          "typeArguments": null,
                          "start": 128,
                          "end": 130
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 117,
                        "end": 130
                      }
                    ],
                    "start": 116,
                    "end": 131
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 138
                          },
                          "typeArguments": null,
                          "start": 136,
                          "end": 138
                        },
                        "start": 134,
                        "end": 138
                      },
                      "start": 133,
                      "end": 138
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 143,
                      "end": 147
                    },
                    "start": 140,
                    "end": 147
                  },
                  "start": 112,
                  "end": 147
                },
                "start": 110,
                "end": 147
              },
              "accessibility": null,
              "static": false,
              "start": 100,
              "end": 148
            }
          ],
          "start": 21,
          "end": 176
        },
        "declare": false,
        "start": 7,
        "end": 176
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 176
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
