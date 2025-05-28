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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 58,
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
        "typeParameters": null,
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 58,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 46,
              "end": 56,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 30,
        "value": "../projA",
        "raw": "\"../projA\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 78,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 78,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 77,
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
                  "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 65,
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
                    "start": 67,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 70,
                      "end": 77
                    }
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 77,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 76,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 73,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 33,
                          "end": 73,
                          "typeParameters": null,
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
                                      "value": "../projA",
                                      "raw": "\"../projA\""
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
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 26,
        "value": "../projC",
        "raw": "\"../projC\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 50,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 50,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 49,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
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
