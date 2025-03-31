__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 23,
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
          "end": 23,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 26,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 40,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 138,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 45,
            "end": 136,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "name": "teams",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 61,
              "end": 136,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 67,
                  "end": 132,
                  "declaration": {
                    "type": "TSModuleDeclaration",
                    "start": 74,
                    "end": 132,
                    "id": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 91,
                      "name": "calling",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "TSModuleBlock",
                      "start": 92,
                      "end": 132,
                      "body": [
                        {
                          "type": "ExportNamedDeclaration",
                          "start": 100,
                          "end": 126,
                          "declaration": {
                            "type": "TSImportEqualsDeclaration",
                            "start": 107,
                            "end": 126,
                            "id": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 117,
                              "name": "Foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "moduleReference": {
                              "type": "TSQualifiedName",
                              "start": 120,
                              "end": 125,
                              "left": {
                                "type": "Identifier",
                                "start": 120,
                                "end": 121,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 125,
                                "name": "Foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "importKind": "value"
                          },
                          "specifiers": [],
                          "source": null,
                          "attributes": [],
                          "exportKind": "value"
                        }
                      ]
                    },
                    "kind": "namespace",
                    "declare": false,
                    "global": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 11,
        "end": 28,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 11,
          "end": 28,
          "left": {
            "type": "TSQualifiedName",
            "start": 11,
            "end": 24,
            "left": {
              "type": "Identifier",
              "start": 11,
              "end": 16,
              "name": "teams",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 17,
              "end": 24,
              "name": "calling",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 64,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 49,
              "end": 64,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 50,
                  "end": 57,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 57,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 57,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 64,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
