test.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 40,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 25,
              "end": 38,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 30,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 39,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 32,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 32,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 31,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 31,
                      "raw": "\"./test\"",
                      "value": "./test"
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 35,
              "end": 39,
              "raw": "null",
              "value": null
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
  "sourceType": "module"
}
```
