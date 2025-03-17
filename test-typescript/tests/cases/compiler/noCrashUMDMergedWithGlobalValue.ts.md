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
        "name": "SomeInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "Action",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
  "end": 91,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "name": "SomeInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 89,
            "name": "value",
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
                  "name": "SomeInterface",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
