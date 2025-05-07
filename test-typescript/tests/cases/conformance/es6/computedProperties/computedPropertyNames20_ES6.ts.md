__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 31,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 29,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 25,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 17,
                    "end": 21
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 25,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 29,
                  "raw": "0",
                  "value": 0,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
