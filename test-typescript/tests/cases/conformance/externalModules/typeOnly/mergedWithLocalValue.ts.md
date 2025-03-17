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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 20,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 16,
          "end": 19,
          "literal": {
            "type": "Literal",
            "start": 16,
            "end": 19,
            "value": "a",
            "raw": "\"a\""
          }
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
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 40,
            "name": "A",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "name": "A",
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
            "type": "Literal",
            "start": 43,
            "end": 46,
            "value": "a",
            "raw": "\"a\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 64,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 63,
        "callee": {
          "type": "MemberExpression",
          "start": 48,
          "end": 61,
          "object": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 61,
            "name": "toUpperCase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
