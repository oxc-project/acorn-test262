__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 26
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": "foo bar",
                          "raw": "'foo bar'",
                          "start": 31,
                          "end": 40
                        },
                        "value": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 42,
                          "end": 43
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 31,
                        "end": 43
                      }
                    ],
                    "start": 29,
                    "end": 45
                  },
                  "definite": false,
                  "start": 25,
                  "end": 45
                }
              ],
              "declare": false,
              "start": 21,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14,
            "end": 46
          }
        ],
        "start": 10,
        "end": 48
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 48
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 48
}
```
