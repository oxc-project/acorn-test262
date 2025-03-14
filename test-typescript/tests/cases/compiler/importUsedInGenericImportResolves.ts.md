__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 35,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 28,
              "end": 33,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 31,
                  "end": 32,
                  "typeName": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "T",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "out": false
            }
          ]
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
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 41,
              "decorators": [],
              "name": "theme",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 28,
                  "end": 41,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 30,
                      "end": 39,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 39,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 33,
                          "end": 39
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
  "end": 82,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 81,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 67,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 67,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 32,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 32,
                      "raw": "\"./test1\"",
                      "value": "./test1"
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 35,
                    "end": 67,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 36,
                        "end": 66,
                        "exprName": {
                          "type": "TSImportType",
                          "start": 43,
                          "end": 66,
                          "argument": {
                            "type": "TSLiteralType",
                            "start": 50,
                            "end": 59,
                            "literal": {
                              "type": "Literal",
                              "start": 50,
                              "end": 59,
                              "raw": "\"./test2\"",
                              "value": "./test2"
                            }
                          },
                          "options": null,
                          "qualifier": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 66,
                            "decorators": [],
                            "name": "theme",
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "start": 70,
              "end": 81,
              "expression": {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 78,
                "end": 81
              }
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
