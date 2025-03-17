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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "name": "P",
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "name": "P",
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
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 41,
              "name": "theme",
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 39,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 33,
                          "end": 39
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
  "end": 82,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 82,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 81,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 67,
              "name": "a",
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
                      "value": "./test1",
                      "raw": "\"./test1\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
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
                              "value": "./test2",
                              "raw": "\"./test2\""
                            }
                          },
                          "options": null,
                          "qualifier": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 66,
                            "name": "theme",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 70,
              "end": 81,
              "expression": {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 78,
                "end": 81
              }
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
