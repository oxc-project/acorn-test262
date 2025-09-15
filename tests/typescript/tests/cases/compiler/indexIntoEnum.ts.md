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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "body": {
              "type": "TSEnumBody",
              "members": [],
              "start": 26,
              "end": 29
            },
            "const": false,
            "declare": false,
            "start": 19,
            "end": 29
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 40
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 45,
                    "end": 46
                  },
                  "optional": false,
                  "computed": true,
                  "start": 43,
                  "end": 47
                },
                "definite": false,
                "start": 39,
                "end": 47
              }
            ],
            "declare": false,
            "start": 35,
            "end": 48
          }
        ],
        "start": 12,
        "end": 50
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
