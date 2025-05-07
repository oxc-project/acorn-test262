__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 101,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 101,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 34,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 62,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 47,
                  "end": 62,
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "start": 47,
                    "end": 59,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 56,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Bar",
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
