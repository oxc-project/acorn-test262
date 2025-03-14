/node_modules/i-have-a-dir-and-main/dist/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 26,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/node_modules/i-have-a-dir-and-main/dist/dir/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 26,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 30,
        "raw": "'i-have-a-dir-and-main'",
        "value": "i-have-a-dir-and-main"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 37,
      "end": 76,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 44,
        "end": 76,
        "raw": "'i-have-a-dir-and-main/dist/dir'",
        "value": "i-have-a-dir-and-main/dist/dir"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
