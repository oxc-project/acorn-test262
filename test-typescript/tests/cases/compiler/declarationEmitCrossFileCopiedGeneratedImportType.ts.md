__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 58,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 58,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 46,
              "end": 56,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 33,
          "end": 39,
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 78,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 30,
        "raw": "\"../projA\"",
        "value": "../projA",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 78,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 78,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 77,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 77,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 56,
                  "end": 77,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 57,
                      "end": 65,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 60,
                        "end": 65,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 62,
                          "end": 65,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 65,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 70,
                      "end": 77
                    }
                  },
                  "typeParameters": null
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
  "end": 77,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 76,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 76,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 24,
                  "end": 76,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 30,
                      "end": 74,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 73,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 33,
                          "end": 73,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 34,
                              "end": 61,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 37,
                                "end": 61,
                                "typeAnnotation": {
                                  "type": "TSImportType",
                                  "start": 39,
                                  "end": 61,
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "start": 46,
                                    "end": 56,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 46,
                                      "end": 56,
                                      "raw": "\"../projA\"",
                                      "value": "../projA",
                                      "regex": null,
                                      "bigint": null
                                    }
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "start": 58,
                                    "end": 61,
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 63,
                            "end": 73,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 66,
                              "end": 73
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ]
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
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 26,
        "raw": "\"../projC\"",
        "value": "../projC",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 50,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 49,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 46,
              "end": 49,
              "properties": [
                {
                  "type": "Property",
                  "start": 47,
                  "end": 48,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
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
