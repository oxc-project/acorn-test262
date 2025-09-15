__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 15,
        "end": 20
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 52,
                        "end": 58
                      },
                      "start": 50,
                      "end": 58
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 49,
                    "end": 58
                  }
                ],
                "start": 47,
                "end": 60
              },
              "declare": false,
              "start": 35,
              "end": 60
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 28,
            "end": 60
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 83,
                      "end": 87
                    },
                    "start": 81,
                    "end": 87
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 87
                }
              ],
              "start": 78,
              "end": 89
            },
            "declare": false,
            "start": 66,
            "end": 89
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "start": 94,
            "end": 105
          }
        ],
        "start": 21,
        "end": 107
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "baz",
        "raw": "\"baz\"",
        "start": 125,
        "end": 130
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 180,
                                "end": 186
                              },
                              "start": 178,
                              "end": 186
                            },
                            "start": 177,
                            "end": 186
                          },
                          "init": null,
                          "definite": false,
                          "start": 177,
                          "end": 186
                        }
                      ],
                      "declare": false,
                      "start": 173,
                      "end": 187
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 166,
                    "end": 187
                  }
                ],
                "start": 156,
                "end": 193
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 144,
              "end": 193
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 137,
            "end": 193
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 236,
                              "end": 242
                            },
                            "start": 234,
                            "end": 242
                          },
                          "start": 233,
                          "end": 242
                        },
                        "init": null,
                        "definite": false,
                        "start": 233,
                        "end": 242
                      }
                    ],
                    "declare": false,
                    "start": 229,
                    "end": 243
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 222,
                  "end": 243
                }
              ],
              "start": 212,
              "end": 249
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 200,
            "end": 249
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 266
            },
            "start": 256,
            "end": 267
          }
        ],
        "start": 131,
        "end": 269
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 110,
      "end": 269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 269
}
```
