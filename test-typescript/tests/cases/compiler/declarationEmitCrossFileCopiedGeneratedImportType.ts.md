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
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 33,
          "end": 39,
          "name": "Number",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 40,
          "end": 58,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 46,
              "end": 56,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 77,
              "name": "f",
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
                      "name": "foo",
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
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 76,
              "name": "e",
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
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "foo",
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
                                    "name": "Foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
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
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
