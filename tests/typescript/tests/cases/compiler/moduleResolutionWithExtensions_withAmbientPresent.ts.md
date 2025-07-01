__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 77,
  "end": 77
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "js",
        "raw": "\"js\"",
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 40
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 43,
                    "end": 44
                  },
                  "definite": false,
                  "start": 39,
                  "end": 44
                }
              ],
              "declare": false,
              "start": 33,
              "end": 45
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 45
          }
        ],
        "start": 20,
        "end": 47
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 48
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "importKind": "value",
          "start": 52,
          "end": 53
        }
      ],
      "source": {
        "type": "Literal",
        "value": "js",
        "raw": "\"js\"",
        "start": 61,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 43,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 66
}
```
