__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 22,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Named",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 20,
          "end": 21,
          "literal": {
            "type": "Literal",
            "start": 20,
            "end": 21,
            "raw": "0",
            "value": 0
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 45,
            "decorators": [],
            "name": "Named",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 45,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 44,
                "end": 45,
                "literal": {
                  "type": "Literal",
                  "start": 44,
                  "end": 45,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
  "end": 36,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 12,
        "end": 19,
        "decorators": [],
        "name": "default",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 34,
        "raw": "\"./three\"",
        "value": "./three"
      }
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
  "end": 57,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "\"./two\"",
        "value": "./two"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 34,
        "decorators": [],
        "name": "Alias",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 37,
        "end": 45,
        "typeArguments": null,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 37,
          "end": 45,
          "left": {
            "type": "Identifier",
            "start": 37,
            "end": 39,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "Named",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 47,
        "end": 55,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "decorators": [],
          "name": "Named",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
