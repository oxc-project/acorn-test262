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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "abstract": false,
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 72,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "value": "./file1",
                "raw": "\"./file1\""
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
                  "value": null,
                  "raw": "null"
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
        "expression": false
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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "value": "./file2",
        "raw": "\"./file2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 72,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 36,
        "end": 72,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                "callee": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            }
          ]
        },
        "expression": false
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
