__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 47,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 16,
            "end": 26,
            "body": {
              "type": "TSEnumBody",
              "start": 23,
              "end": 26,
              "members": []
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 44,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 40,
                  "end": 44,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 42,
                    "end": 43,
                    "raw": "0",
                    "value": 0
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
        "end": 8,
        "decorators": [],
        "name": "M",
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
