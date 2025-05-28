__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 55,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 53,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 29,
                "end": 53,
                "id": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 33,
                  "end": 53,
                  "callee": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 40,
                    "decorators": [],
                    "name": "require",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 41,
                      "end": 52,
                      "left": {
                        "type": "Literal",
                        "start": 41,
                        "end": 45,
                        "value": "t/",
                        "raw": "\"t/\""
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 52,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
