__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
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
          "start": 21,
          "end": 35,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 33,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 30,
                  "end": 32,
                  "literal": {
                    "type": "Literal",
                    "start": 30,
                    "end": 32,
                    "raw": "12",
                    "value": 12,
                    "regex": null,
                    "bigint": null
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
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
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
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 28,
              "typeAnnotation": {
                "type": "TSImportType",
                "start": 9,
                "end": 28,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 16,
                  "end": 23,
                  "literal": {
                    "type": "Literal",
                    "start": 16,
                    "end": 23,
                    "raw": "\"./b/c\"",
                    "value": "./b/c",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 28,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 31,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 32,
                "end": 37,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 37,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 51,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 48,
          "end": 49,
          "exported": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 40,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 40,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 9,
                "end": 40,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 36,
                  "end": 39,
                  "literal": {
                    "type": "Literal",
                    "start": 36,
                    "end": 39,
                    "raw": "\"c\"",
                    "value": "c",
                    "regex": null,
                    "bigint": null
                  }
                },
                "objectType": {
                  "type": "TSTypeQuery",
                  "start": 9,
                  "end": 35,
                  "exprName": {
                    "type": "TSImportType",
                    "start": 16,
                    "end": 35,
                    "argument": {
                      "type": "TSLiteralType",
                      "start": 23,
                      "end": 34,
                      "literal": {
                        "type": "Literal",
                        "start": 23,
                        "end": 34,
                        "raw": "\"./a/inner\"",
                        "value": "./a/inner",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "options": null,
                    "qualifier": null,
                    "typeArguments": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 43,
            "end": 50,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 49,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 49,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 63,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 60,
          "end": 61,
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
