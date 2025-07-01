__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12,
                    "end": 15
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 12,
                  "end": 17
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 21,
                    "end": 24
                  },
                  "expression": false,
                  "start": 18,
                  "end": 24
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 10,
                "end": 24
              }
            ],
            "start": 8,
            "end": 26
          },
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 26
}
```
