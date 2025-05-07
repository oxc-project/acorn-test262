__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 23,
        "decorators": [],
        "name": "UMD",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 33,
        "end": 64,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 43,
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 46,
          "end": 64,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 52,
              "end": 62,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 55,
                  "end": 61
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 109,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 73,
        "end": 109,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 99,
          "decorators": [],
          "name": "makeThing",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 101,
          "end": 108,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 103,
            "end": 108,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 103,
              "end": 108,
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null
            }
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
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 31,
        "raw": "\"umd\"",
        "value": "umd",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "makeThing",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "makeThing",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 66,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 66,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 65,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 54,
              "end": 65,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 54,
                "end": 63,
                "decorators": [],
                "name": "makeThing",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
