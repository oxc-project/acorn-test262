__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "COFFEE",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 34,
              "end": 35
            },
            "definite": false,
            "start": 25,
            "end": 35
          }
        ],
        "declare": false,
        "start": 19,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEA",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 53
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 56,
              "end": 57
            },
            "definite": false,
            "start": 50,
            "end": 57
          }
        ],
        "declare": false,
        "start": 44,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 12,
  "end": 60
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Drink",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 17
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 20,
                "end": 21
              },
              "start": 20,
              "end": 21
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 24,
                "end": 25
              },
              "start": 24,
              "end": 25
            }
          ],
          "start": 20,
          "end": 25
        },
        "declare": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "Drink",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 44
      },
      "source": {
        "type": "Literal",
        "value": "./constants",
        "raw": "\"./constants\"",
        "start": 50,
        "end": 63
      },
      "attributes": [],
      "exportKind": "value",
      "start": 27,
      "end": 64
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Drink",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Drink",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./drink",
        "raw": "\"./drink\"",
        "start": 22,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Drink",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 115
                },
                "typeArguments": null,
                "start": 110,
                "end": 115
              },
              "start": 108,
              "end": 115
            },
            "start": 107,
            "end": 115
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Drink",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 123
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEA",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 127
            },
            "optional": false,
            "computed": false,
            "start": 118,
            "end": 127
          },
          "definite": false,
          "start": 107,
          "end": 127
        }
      ],
      "declare": false,
      "start": 101,
      "end": 128
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 128
}
```
