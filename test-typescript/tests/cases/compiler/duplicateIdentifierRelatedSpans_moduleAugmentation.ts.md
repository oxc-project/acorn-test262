/dir/a.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
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
  ],
  "sourceType": "module"
}
```
/dir/b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 60,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 33,
        "end": 60,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 39,
            "end": 58,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 46,
              "end": 58,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 52,
                  "end": 57,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 56,
                    "end": 57,
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
        "start": 27,
        "end": 32,
        "raw": "\"./a\"",
        "value": "./a"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 115,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 88,
        "end": 115,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 94,
            "end": 113,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 101,
              "end": 113,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 107,
                  "end": 112,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 111,
                    "end": 112,
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
        "start": 77,
        "end": 87,
        "raw": "\"../dir/a\"",
        "value": "../dir/a"
      }
    }
  ],
  "sourceType": "module"
}
```
