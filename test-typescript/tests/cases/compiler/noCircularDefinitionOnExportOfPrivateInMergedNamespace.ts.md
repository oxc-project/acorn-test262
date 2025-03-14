__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "cat",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 14,
            "raw": "12",
            "value": 12
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 28,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 29,
      "end": 42,
      "expression": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 88,
      "body": {
        "type": "TSModuleBlock",
        "start": 65,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 86,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 80,
                "end": 83,
                "exported": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 83,
                  "decorators": [],
                  "name": "cat",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 83,
                  "decorators": [],
                  "name": "cat",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
