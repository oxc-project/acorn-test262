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
        "name": "UMD",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 64,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 33,
        "end": 64,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 43,
          "name": "Thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 46,
          "end": 64,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 52,
              "end": 62,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 55,
                  "end": 61
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 109,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 73,
        "end": 109,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 99,
          "name": "makeThing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 101,
          "end": 108,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 103,
            "end": 108,
            "typeName": {
              "type": "Identifier",
              "start": 103,
              "end": 108,
              "name": "Thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
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
  "end": 67,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "makeThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "makeThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 31,
        "value": "umd",
        "raw": "\"umd\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 66,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 66,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 54,
              "end": 65,
              "callee": {
                "type": "Identifier",
                "start": 54,
                "end": 63,
                "name": "makeThing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
