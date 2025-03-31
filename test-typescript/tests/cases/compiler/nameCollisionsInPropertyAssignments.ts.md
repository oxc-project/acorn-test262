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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 21,
                  "end": 32,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 24,
                    "end": 32,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 26,
                        "end": 30,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 26,
                          "end": 29,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 26,
                            "end": 27,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
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
