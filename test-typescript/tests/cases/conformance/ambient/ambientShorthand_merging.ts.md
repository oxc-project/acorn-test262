__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 21,
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
      }
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
  "end": 55,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 54,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 54,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 52,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 52,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 51,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 51,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
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
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
      }
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
  "start": 86,
  "end": 116,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 115,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 114,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 93,
          "end": 96,
          "local": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 99,
          "end": 102,
          "imported": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
