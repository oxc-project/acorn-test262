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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
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
          "end": 35,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 33,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "value": 12,
                    "raw": "12"
                  }
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 28,
            "name": "c",
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
                    "value": "./b/c",
                    "raw": "\"./b/c\""
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 28,
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 37,
                  "value": 12,
                  "raw": "12"
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
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 51,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 48,
          "end": 49,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
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
  "end": 64,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 40,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 40,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 9,
                "end": 40,
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
                        "value": "./a/inner",
                        "raw": "\"./a/inner\""
                      }
                    },
                    "options": null,
                    "qualifier": null,
                    "typeArguments": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 36,
                  "end": 39,
                  "literal": {
                    "type": "Literal",
                    "start": 36,
                    "end": 39,
                    "value": "c",
                    "raw": "\"c\""
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 49,
                  "value": 12,
                  "raw": "12"
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
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 63,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 60,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
