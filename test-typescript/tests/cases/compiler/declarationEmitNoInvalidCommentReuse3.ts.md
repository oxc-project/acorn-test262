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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 30,
        "value": "./obj",
        "raw": "\"./obj\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 58,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 43,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 43,
            "name": "id",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 43,
            "name": "id",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 57,
        "value": "./id",
        "raw": "\"./id\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 83,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 66,
        "end": 83,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 72,
            "end": 82,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 76,
              "end": 82,
              "name": "object",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "id",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "id",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 25,
        "value": "./id",
        "raw": "\"./id\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 91,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 91,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 90,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 90,
              "name": "object",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 90,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 64,
                    "end": 68,
                    "left": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 66,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 78,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 78,
                              "end": 87,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 80,
                                "end": 87,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 80,
                                  "end": 84,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 80,
                                    "end": 82,
                                    "name": "id",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 83,
                                    "end": 84,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
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
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
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
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 27,
          "name": "id",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 28,
          "end": 50,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 34,
              "end": 48,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "declare": false
            }
          ]
        },
        "kind": "namespace",
        "declare": true,
        "global": false
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
