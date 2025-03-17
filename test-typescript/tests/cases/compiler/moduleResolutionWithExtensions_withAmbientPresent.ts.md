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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "js",
        "raw": "\"js\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 45,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 45,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 39,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 43,
                    "end": 44,
                    "value": 0,
                    "raw": "0"
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 67,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 66,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 52,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 65,
        "value": "js",
        "raw": "\"js\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
