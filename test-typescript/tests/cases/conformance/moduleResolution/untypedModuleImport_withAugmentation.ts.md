__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 50,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 50,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 49,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 49,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
    },
    {
      "type": "ImportDeclaration",
      "start": 53,
      "end": 77,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 62,
          "end": 63,
          "imported": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
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
        "start": 71,
        "end": 76,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 80,
      "expression": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
