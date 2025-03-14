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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 23,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 23,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 26,
      "end": 138,
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 138,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 45,
            "end": 136,
            "body": {
              "type": "TSModuleBlock",
              "start": 61,
              "end": 136,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 67,
                  "end": 132,
                  "attributes": [],
                  "declaration": {
                    "type": "TSModuleDeclaration",
                    "start": 74,
                    "end": 132,
                    "body": {
                      "type": "TSModuleBlock",
                      "start": 92,
                      "end": 132,
                      "body": [
                        {
                          "type": "ExportNamedDeclaration",
                          "start": 100,
                          "end": 126,
                          "attributes": [],
                          "declaration": {
                            "type": "TSImportEqualsDeclaration",
                            "start": 107,
                            "end": 126,
                            "id": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 117,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false
                            },
                            "importKind": "value",
                            "moduleReference": {
                              "type": "TSQualifiedName",
                              "start": 120,
                              "end": 125,
                              "left": {
                                "type": "Identifier",
                                "start": 120,
                                "end": 121,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 125,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false
                              }
                            }
                          },
                          "exportKind": "value",
                          "source": null,
                          "specifiers": []
                        }
                      ]
                    },
                    "declare": false,
                    "global": false,
                    "id": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 91,
                      "decorators": [],
                      "name": "calling",
                      "optional": false
                    },
                    "kind": "namespace"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "decorators": [],
              "name": "teams",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 40,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
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
              "decorators": [],
              "name": "teams",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 17,
              "end": 24,
              "decorators": [],
              "name": "calling",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 64,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 49,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 64,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 50,
                  "end": 57,
                  "decorators": [],
                  "name": "p",
                  "optional": true,
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
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
