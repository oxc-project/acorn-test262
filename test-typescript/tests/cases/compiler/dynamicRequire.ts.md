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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 55,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 53,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 29,
                "end": 53,
                "definite": false,
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
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 41,
                      "end": 52,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 41,
                        "end": 45,
                        "raw": "\"t/\"",
                        "value": "t/",
                        "regex": null,
                        "bigint": null
                      },
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
                  "callee": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 40,
                    "decorators": [],
                    "name": "require",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
