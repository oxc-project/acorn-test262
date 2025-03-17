__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 46,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 21,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 29,
                    "end": 45,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 31,
                        "end": 43,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 31,
                          "end": 40,
                          "value": "foo bar",
                          "raw": "'foo bar'"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 42,
                          "end": 43,
                          "value": 4,
                          "raw": "4"
                        },
                        "kind": "init",
                        "optional": false
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
