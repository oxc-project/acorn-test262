__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 264,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 107,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 107,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 60,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 35,
              "end": 60,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 47,
                "end": 60,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 58,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 52,
                        "end": 58
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 66,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 78,
              "end": 89,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 80,
                  "end": 87,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 87,
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 87,
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "type": "TSExportAssignment",
            "start": 94,
            "end": 105,
            "expression": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 110,
      "end": 263,
      "id": {
        "type": "Literal",
        "start": 125,
        "end": 130,
        "value": "baz",
        "raw": "\"baz\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 131,
        "end": 263,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 190,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 144,
              "end": 190,
              "id": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 153,
                "end": 190,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 163,
                    "end": 184,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 170,
                      "end": 184,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 174,
                          "end": 183,
                          "id": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 183,
                            "name": "b",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 175,
                              "end": 183,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 177,
                                "end": 183
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 197,
            "end": 243,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 206,
              "end": 243,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 216,
                  "end": 237,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 223,
                    "end": 237,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 227,
                        "end": 236,
                        "id": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 236,
                          "name": "c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 228,
                            "end": 236,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 230,
                              "end": 236
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSExportAssignment",
            "start": 250,
            "end": 261,
            "expression": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
