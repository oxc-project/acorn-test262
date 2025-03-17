__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 50,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 49,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 49,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    }
                  },
                  "init": null
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
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
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
  "start": 45,
  "end": 73,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 69,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 54,
          "end": 55,
          "imported": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
