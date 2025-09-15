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
          "name": "Person",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
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
                "start": 27,
                "end": 31
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                },
                "start": 31,
                "end": 39
              },
              "accessibility": null,
              "static": false,
              "start": 27,
              "end": 40
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 45
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 47,
                  "end": 53
                },
                "start": 45,
                "end": 53
              },
              "accessibility": null,
              "static": false,
              "start": 42,
              "end": 54
            }
          ],
          "start": 24,
          "end": 56
        },
        "declare": false,
        "start": 7,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 77
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
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 100
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
                        "start": 105,
                        "end": 106
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Person",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 114
                          },
                          "typeArguments": null,
                          "start": 108,
                          "end": 114
                        },
                        "start": 106,
                        "end": 114
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 105,
                      "end": 115
                    }
                  ],
                  "start": 101,
                  "end": 118
                },
                "declare": false,
                "start": 88,
                "end": 118
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 81,
              "end": 118
            }
          ],
          "start": 78,
          "end": 120
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 65,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 58,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_0",
          "raw": "'./foo_0'",
          "start": 22,
          "end": 31
        },
        "start": 14,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 129
                },
                "typeArguments": null,
                "start": 118,
                "end": 129
              },
              "start": 116,
              "end": 129
            },
            "start": 115,
            "end": 129
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 132,
            "end": 134
          },
          "definite": false,
          "start": 115,
          "end": 134
        }
      ],
      "declare": false,
      "start": 111,
      "end": 135
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 146
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 154
                        },
                        "typeArguments": null,
                        "start": 148,
                        "end": 154
                      },
                      "start": 146,
                      "end": 154
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 144,
                    "end": 154
                  }
                ],
                "start": 143,
                "end": 155
              },
              "start": 141,
              "end": 155
            },
            "start": 140,
            "end": 155
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo0",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 162
          },
          "definite": false,
          "start": 140,
          "end": 162
        }
      ],
      "declare": false,
      "start": 136,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 163
}
```
