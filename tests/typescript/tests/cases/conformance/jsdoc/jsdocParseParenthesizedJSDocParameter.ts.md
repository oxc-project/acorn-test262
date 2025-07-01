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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 56
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 65
                },
                "optional": false,
                "computed": false,
                "start": 55,
                "end": 65
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 55,
              "end": 67
            },
            "id": null,
            "generator": false,
            "start": 50,
            "end": 67
          },
          "definite": false,
          "start": 46,
          "end": 67
        }
      ],
      "declare": false,
      "start": 42,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 67
}
```
