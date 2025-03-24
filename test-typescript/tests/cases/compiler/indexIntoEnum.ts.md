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
        "end": 47,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 16,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 23,
              "end": 26,
              "members": []
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
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 40,
                  "end": 44,
                  "object": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 42,
                    "end": 43,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
