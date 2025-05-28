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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 42,
        "end": 83,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 53,
          "decorators": [],
          "name": "Action",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
                "value": "PUSH",
                "raw": "\"PUSH\""
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
                "value": "POP",
                "raw": "\"POP\""
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
                "value": "REPLACE",
                "raw": "\"REPLACE\""
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 90,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "decorators": [],
        "name": "SomeInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 52,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 43,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 90,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 89,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 89,
                  "decorators": [],
                  "name": "SomeInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
