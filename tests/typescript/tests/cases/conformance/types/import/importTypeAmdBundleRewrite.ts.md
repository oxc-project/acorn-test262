__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 30,
                    "end": 32
                  },
                  "start": 30,
                  "end": 32
                },
                "start": 28,
                "end": 32
              },
              "accessibility": null,
              "static": false,
              "start": 27,
              "end": 33
            }
          ],
          "start": 21,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./b/c",
                  "raw": "\"./b/c\"",
                  "start": 16,
                  "end": 23
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 28
                },
                "typeArguments": null,
                "start": 9,
                "end": 28
              },
              "start": 7,
              "end": 28
            },
            "start": 6,
            "end": 28
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 35,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 32,
                "end": 37
              }
            ],
            "start": 31,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "exportKind": "value",
          "start": 48,
          "end": 49
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSImportType",
                    "source": {
                      "type": "Literal",
                      "value": "./a/inner",
                      "raw": "\"./a/inner\"",
                      "start": 23,
                      "end": 34
                    },
                    "options": null,
                    "qualifier": null,
                    "typeArguments": null,
                    "start": 16,
                    "end": 35
                  },
                  "typeArguments": null,
                  "start": 9,
                  "end": 35
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 36,
                    "end": 39
                  },
                  "start": 36,
                  "end": 39
                },
                "start": 9,
                "end": 40
              },
              "start": 7,
              "end": 40
            },
            "start": 6,
            "end": 40
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 45
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 47,
                  "end": 49
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 44,
                "end": 49
              }
            ],
            "start": 43,
            "end": 50
          },
          "definite": false,
          "start": 6,
          "end": 50
        }
      ],
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "exportKind": "value",
          "start": 60,
          "end": 61
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
