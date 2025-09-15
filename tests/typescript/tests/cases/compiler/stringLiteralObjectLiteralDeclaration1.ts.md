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
        "start": 10,
        "end": 12
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
                    "start": 28,
                    "end": 29
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
                          "start": 34,
                          "end": 43
                        },
                        "value": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 45,
                          "end": 46
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 34,
                        "end": 46
                      }
                    ],
                    "start": 32,
                    "end": 48
                  },
                  "definite": false,
                  "start": 28,
                  "end": 48
                }
              ],
              "declare": false,
              "start": 24,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 49
          }
        ],
        "start": 13,
        "end": 51
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
