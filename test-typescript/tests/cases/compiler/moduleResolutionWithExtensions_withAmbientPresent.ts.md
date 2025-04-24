__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 77,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 45,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 45,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 39,
                  "end": 44,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 43,
                    "end": 44,
                    "raw": "0",
                    "value": 0
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
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "raw": "\"js\"",
        "value": "js"
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
  "start": 43,
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 66,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 65,
        "raw": "\"js\"",
        "value": "js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 52,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "x",
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
