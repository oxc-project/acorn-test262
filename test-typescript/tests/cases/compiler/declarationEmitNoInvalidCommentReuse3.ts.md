__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "raw": "\"./obj\"",
        "value": "./obj"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 57,
        "raw": "\"./id\"",
        "value": "./id"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 43,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 43,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 43,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 66,
        "end": 83,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 72,
            "end": 82,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 76,
              "end": 82,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 25,
        "raw": "\"./id\"",
        "value": "./id"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 91,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 91,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 90,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 90,
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 90,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 68,
                    "end": 90,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 69,
                        "end": 89,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 75,
                            "end": 87,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 78,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 78,
                              "end": 87,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 80,
                                "end": 87,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 84,
                                  "end": 87,
                                  "params": [
                                    {
                                      "type": "TSLiteralType",
                                      "start": 85,
                                      "end": 86,
                                      "literal": {
                                        "type": "Literal",
                                        "start": 85,
                                        "end": 86,
                                        "raw": "1",
                                        "value": 1
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 80,
                                  "end": 84,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 80,
                                    "end": 82,
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 83,
                                    "end": 84,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 64,
                    "end": 68,
                    "left": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 66,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
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
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 50,
        "body": {
          "type": "TSModuleBlock",
          "start": 28,
          "end": 50,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 34,
              "end": 48,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 40,
                "end": 43,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 41,
                    "end": 42,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 27,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
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
