__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 18,
            "end": 34,
            "properties": [
              {
                "type": "Property",
                "start": 20,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 21,
                  "end": 32,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 24,
                    "end": 32,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 26,
                        "end": 30,
                        "directive": null,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 26,
                          "end": 29,
                          "argument": {
                            "type": "Identifier",
                            "start": 26,
                            "end": 27,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
