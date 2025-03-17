__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 33,
        "decorators": [],
        "name": "SomeInterface",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 42,
        "end": 83,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 53,
          "decorators": [],
          "name": "Action",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 56,
          "end": 82,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 56,
              "end": 62,
              "literal": {
                "type": "Literal",
                "start": 56,
                "end": 62,
                "raw": "\"PUSH\"",
                "value": "PUSH"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 65,
              "end": 70,
              "literal": {
                "type": "Literal",
                "start": 65,
                "end": 70,
                "raw": "\"POP\"",
                "value": "POP"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 73,
              "end": 82,
              "literal": {
                "type": "Literal",
                "start": 73,
                "end": 82,
                "raw": "\"REPLACE\"",
                "value": "REPLACE"
              }
            }
          ]
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
  "end": 91,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 43,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "decorators": [],
        "name": "SomeInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 89,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 89,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 89,
                  "decorators": [],
                  "name": "SomeInterface",
                  "optional": false,
                  "typeAnnotation": null
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
