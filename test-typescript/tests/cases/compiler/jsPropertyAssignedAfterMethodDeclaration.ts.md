__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 120,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 118,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 17,
                  "end": 118,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 20,
                    "end": 118,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 101,
                        "end": 112,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 101,
                          "end": 111,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 101,
                            "end": 107,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 101,
                              "end": 105
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 110,
                            "end": 111,
                            "raw": "0",
                            "value": 0
                          }
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
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
