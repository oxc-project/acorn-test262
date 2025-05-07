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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 11,
            "end": 22,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 17,
              "end": 22,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 44,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 29,
                "end": 43,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 30,
                  "end": 36,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 34,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "decorators": [],
                  "name": "bar3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 49,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
