__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
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
  "end": 115,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 60,
      "id": {
        "type": "Literal",
        "start": 27,
        "end": 32,
        "value": "./a",
        "raw": "\"./a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 33,
        "end": 60,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 39,
            "end": 58,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 46,
              "end": 58,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 52,
                  "end": 57,
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 56,
                    "end": 57,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 115,
      "id": {
        "type": "Literal",
        "start": 77,
        "end": 87,
        "value": "../dir/a",
        "raw": "\"../dir/a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 88,
        "end": 115,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 94,
            "end": 113,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 101,
              "end": 113,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 107,
                  "end": 112,
                  "id": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 111,
                    "end": 112,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
