__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 30,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
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
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 32,
              "name": "a",
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
                      "value": "./test",
                      "raw": "\"./test\""
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 35,
              "end": 39,
              "value": null,
              "raw": "null"
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
