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
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 36,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 34,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 34,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 31,
                    "end": 34,
                    "value": 123,
                    "raw": "123"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 37,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 48,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 44,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 48,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
