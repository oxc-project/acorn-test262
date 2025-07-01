__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 19
          }
        ],
        "start": 7,
        "end": 21
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "member",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 45
                  },
                  "optional": false,
                  "computed": false,
                  "start": 37,
                  "end": 45
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 48,
                  "end": 49
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 36,
                "end": 49
              }
            ],
            "start": 30,
            "end": 51
          },
          "definite": false,
          "start": 26,
          "end": 51
        }
      ],
      "declare": false,
      "start": 22,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
