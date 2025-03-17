__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 176,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 176,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 176,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 69,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 35,
                "name": "preFetch",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 68,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 37,
                  "end": 68,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 37,
                    "end": 52,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 38,
                        "end": 51,
                        "name": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 40,
                          "name": "T1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 49,
                          "end": 51,
                          "typeName": {
                            "type": "Identifier",
                            "start": 49,
                            "end": 51,
                            "name": "T2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 54,
                      "end": 59,
                      "name": "c",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 55,
                        "end": 59,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 57,
                          "end": 59,
                          "typeName": {
                            "type": "Identifier",
                            "start": 57,
                            "end": 59,
                            "name": "T1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 64,
                      "end": 68
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 100,
              "end": 148,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 110,
                "name": "preFetcher",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "start": 112,
                  "end": 147,
                  "abstract": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 116,
                    "end": 131,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 117,
                        "end": 130,
                        "name": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 119,
                          "name": "T1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 128,
                          "end": 130,
                          "typeName": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 130,
                            "name": "T2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 133,
                      "end": 138,
                      "name": "c",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 134,
                        "end": 138,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 136,
                          "end": 138,
                          "typeName": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 138,
                            "name": "T1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 143,
                      "end": 147
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
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
