__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 44,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 42,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 42,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 41,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 26,
                    "end": 32,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 35,
                    "end": 41,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 36,
                        "end": 37,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 39,
                        "end": 40,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
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
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
