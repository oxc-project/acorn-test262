__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 72,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 72,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 45,
          "end": 72,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 51,
              "end": 70,
              "argument": {
                "type": "TSAsExpression",
                "start": 58,
                "end": 69,
                "expression": {
                  "type": "Literal",
                  "start": 58,
                  "end": 62,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 66,
                  "end": 69
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 21,
          "end": 44,
          "typeAnnotation": {
            "type": "TSImportType",
            "start": 23,
            "end": 44,
            "argument": {
              "type": "TSLiteralType",
              "start": 30,
              "end": 39,
              "literal": {
                "type": "Literal",
                "start": 30,
                "end": 39,
                "raw": "\"./file1\"",
                "value": "./file1",
                "regex": null,
                "bigint": null
              }
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
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
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"./file2\"",
        "value": "./file2",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 36,
        "end": 72,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 51,
          "end": 72,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 57,
              "end": 70,
              "argument": {
                "type": "CallExpression",
                "start": 64,
                "end": 69,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
