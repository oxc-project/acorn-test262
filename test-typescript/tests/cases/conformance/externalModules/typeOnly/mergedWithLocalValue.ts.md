__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 20,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 16,
          "end": 19,
          "literal": {
            "type": "Literal",
            "start": 16,
            "end": 19,
            "raw": "\"a\"",
            "value": "a",
            "regex": null,
            "bigint": null
          }
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
  "end": 64,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 40,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 46,
            "raw": "\"a\"",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 64,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 63,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 48,
          "end": 61,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 61,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
