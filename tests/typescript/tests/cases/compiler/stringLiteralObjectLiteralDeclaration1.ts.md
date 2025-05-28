__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 26,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
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
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
