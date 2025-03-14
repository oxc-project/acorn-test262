subfolder/index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 29,
            "end": 44,
            "computed": false,
            "object": {
              "type": "MetaProperty",
              "start": 29,
              "end": 40,
              "meta": {
                "type": "Identifier",
                "start": 29,
                "end": 35,
                "decorators": [],
                "name": "import",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "decorators": [],
                "name": "meta",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "url",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 57,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 54,
          "end": 55,
          "exported": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 29,
            "end": 44,
            "computed": false,
            "object": {
              "type": "MetaProperty",
              "start": 29,
              "end": 40,
              "meta": {
                "type": "Identifier",
                "start": 29,
                "end": 35,
                "decorators": [],
                "name": "import",
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "decorators": [],
                "name": "meta",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "url",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 57,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 54,
          "end": 55,
          "exported": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
