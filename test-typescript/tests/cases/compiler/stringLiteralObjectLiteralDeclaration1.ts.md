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
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 21,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 45,
                  "definite": false,
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
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 31,
                          "end": 40,
                          "raw": "'foo bar'",
                          "value": "foo bar",
                          "regex": null,
                          "bigint": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 42,
                          "end": 43,
                          "raw": "4",
                          "value": 4,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
