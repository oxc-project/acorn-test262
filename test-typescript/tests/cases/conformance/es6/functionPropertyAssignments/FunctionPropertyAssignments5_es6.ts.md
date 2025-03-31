__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 26,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 24,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 12,
                  "end": 17,
                  "callee": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 15,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 18,
                  "end": 24,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 21,
                    "end": 24,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
