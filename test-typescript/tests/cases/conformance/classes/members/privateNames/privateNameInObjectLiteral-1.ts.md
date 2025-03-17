__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 27,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 25,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "PrivateIdentifier",
                  "start": 18,
                  "end": 22,
                  "name": "foo"
                },
                "value": {
                  "type": "Literal",
                  "start": 24,
                  "end": 25,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
