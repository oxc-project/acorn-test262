__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "someMod",
        "raw": "\"someMod\"",
        "start": 15,
        "end": 24
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
                "name": "TopLevel",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 56
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
                      "name": "duplicate1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 77
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          },
                          "start": 82,
                          "end": 91
                        },
                        "start": 79,
                        "end": 91
                      },
                      "start": 77,
                      "end": 91
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 67,
                    "end": 92
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "duplicate2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 111
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 119,
                            "end": 125
                          },
                          "start": 116,
                          "end": 125
                        },
                        "start": 113,
                        "end": 125
                      },
                      "start": 111,
                      "end": 125
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 101,
                    "end": 126
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "duplicate3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 145
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 153,
                            "end": 159
                          },
                          "start": 150,
                          "end": 159
                        },
                        "start": 147,
                        "end": 159
                      },
                      "start": 145,
                      "end": 159
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 135,
                    "end": 160
                  }
                ],
                "start": 57,
                "end": 166
              },
              "declare": false,
              "start": 38,
              "end": 166
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 31,
            "end": 166
          }
        ],
        "start": 25,
        "end": 168
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 168
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "someMod",
        "raw": "\"someMod\"",
        "start": 49,
        "end": 58
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
                "name": "TopLevel",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 90
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "duplicate1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 111
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 115,
                        "end": 121
                      },
                      "start": 113,
                      "end": 121
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 101,
                    "end": 122
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "duplicate2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 141
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 145,
                        "end": 151
                      },
                      "start": 143,
                      "end": 151
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 131,
                    "end": 152
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "duplicate3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 171
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 175,
                        "end": 181
                      },
                      "start": 173,
                      "end": 181
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 161,
                    "end": 182
                  }
                ],
                "start": 91,
                "end": 188
              },
              "declare": false,
              "start": 72,
              "end": 188
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 65,
            "end": 188
          }
        ],
        "start": 59,
        "end": 190
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 34,
      "end": 190
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 191,
      "end": 201
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 34,
  "end": 201
}
```
