__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 11,
            "end": 22,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 17,
              "end": 22,
              "value": "bar",
              "raw": "\"bar\""
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 49,
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 44,
            "properties": [
              {
                "type": "Property",
                "start": 29,
                "end": 43,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 30,
                  "end": 36,
                  "callee": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 34,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "name": "bar3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 49,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
