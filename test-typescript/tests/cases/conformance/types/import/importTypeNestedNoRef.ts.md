__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 27,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "decorators": [],
          "name": "LookAt",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 21,
          "end": 26,
          "literal": {
            "type": "Literal",
            "start": 21,
            "end": 26,
            "raw": "\"./b\"",
            "value": "./b",
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 26,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 20,
          "end": 25,
          "literal": {
            "type": "Literal",
            "start": 20,
            "end": 25,
            "raw": "\"yes\"",
            "value": "yes",
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
  "end": 124,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 58,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 50,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 50,
                  "argument": {
                    "type": "TSImportType",
                    "start": 23,
                    "end": 43,
                    "argument": {
                      "type": "TSLiteralType",
                      "start": 30,
                      "end": 35,
                      "literal": {
                        "type": "Literal",
                        "start": 30,
                        "end": 35,
                        "raw": "\"./a\"",
                        "value": "./a",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "options": null,
                    "qualifier": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 43,
                      "decorators": [],
                      "name": "LookAt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 50,
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 53,
              "end": 58,
              "raw": "\"yes\"",
              "value": "yes",
              "regex": null,
              "bigint": null
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
