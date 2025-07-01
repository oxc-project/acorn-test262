__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 33
      },
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Action",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 53
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "PUSH",
                "raw": "\"PUSH\"",
                "start": 56,
                "end": 62
              },
              "start": 56,
              "end": 62
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "POP",
                "raw": "\"POP\"",
                "start": 65,
                "end": 70
              },
              "start": 65,
              "end": 70
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "REPLACE",
                "raw": "\"REPLACE\"",
                "start": 73,
                "end": 82
              },
              "start": 73,
              "end": 82
            }
          ],
          "start": 56,
          "end": 82
        },
        "declare": false,
        "start": 42,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 35,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 52
          }
        ],
        "start": 24,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 54
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 89
                },
                "typeArguments": null,
                "start": 76,
                "end": 89
              },
              "start": 74,
              "end": 89
            },
            "start": 69,
            "end": 89
          },
          "init": null,
          "definite": false,
          "start": 69,
          "end": 89
        }
      ],
      "declare": true,
      "start": 55,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
