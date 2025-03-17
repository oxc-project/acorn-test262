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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 27,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "name": "LookAt",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 21,
          "end": 26,
          "literal": {
            "type": "Literal",
            "start": 21,
            "end": 26,
            "value": "./b",
            "raw": "\"./b\""
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "name": "Value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 20,
          "end": 25,
          "literal": {
            "type": "Literal",
            "start": 20,
            "end": 25,
            "value": "yes",
            "raw": "\"yes\""
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
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 50,
              "name": "x",
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
                        "value": "./a",
                        "raw": "\"./a\""
                      }
                    },
                    "options": null,
                    "qualifier": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 43,
                      "name": "LookAt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 50,
                    "name": "Value",
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
              "start": 53,
              "end": 58,
              "value": "yes",
              "raw": "\"yes\""
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
