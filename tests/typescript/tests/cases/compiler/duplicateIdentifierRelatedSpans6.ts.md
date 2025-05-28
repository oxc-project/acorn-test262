__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 168,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "someMod",
        "raw": "\"someMod\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 168,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 31,
            "end": 166,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 38,
              "end": 166,
              "id": {
                "type": "Identifier",
                "start": 48,
                "end": 56,
                "decorators": [],
                "name": "TopLevel",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 57,
                "end": 166,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 92,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 77,
                      "decorators": [],
                      "name": "duplicate1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 91,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 79,
                        "end": 91,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 82,
                          "end": 91,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 101,
                    "end": 126,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 111,
                      "decorators": [],
                      "name": "duplicate2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 113,
                        "end": 125,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 116,
                          "end": 125,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 119,
                            "end": 125
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 135,
                    "end": 160,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 145,
                      "decorators": [],
                      "name": "duplicate3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 159,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 147,
                        "end": 159,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 150,
                          "end": 159,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 153,
                            "end": 159
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 201,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 190,
      "id": {
        "type": "Literal",
        "start": 49,
        "end": 58,
        "value": "someMod",
        "raw": "\"someMod\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 59,
        "end": 190,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 65,
            "end": 188,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 72,
              "end": 188,
              "id": {
                "type": "Identifier",
                "start": 82,
                "end": 90,
                "decorators": [],
                "name": "TopLevel",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 91,
                "end": 188,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 101,
                    "end": 122,
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 111,
                      "decorators": [],
                      "name": "duplicate1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 113,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 115,
                        "end": 121
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 131,
                    "end": 152,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 141,
                      "decorators": [],
                      "name": "duplicate2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 145,
                        "end": 151
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 161,
                    "end": 182,
                    "key": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 171,
                      "decorators": [],
                      "name": "duplicate3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 175,
                        "end": 181
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 201,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
