__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 46,
                          "end": 47
                        },
                        "start": 40,
                        "end": 47
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
                          "start": 51,
                          "end": 63
                        },
                        "expression": false,
                        "start": 48,
                        "end": 63
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 38,
                      "end": 63
                    }
                  ],
                  "start": 28,
                  "end": 69
                },
                "definite": false,
                "start": 24,
                "end": 69
              }
            ],
            "declare": false,
            "start": 20,
            "end": 69
          }
        ],
        "start": 14,
        "end": 71
      },
      "expression": false,
      "start": 0,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 71
}
```
