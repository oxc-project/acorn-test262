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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 120,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 17,
                  "end": 118,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 20,
                    "end": 118,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 101,
                        "end": 112,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 101,
                          "end": 111,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 101,
                            "end": 107,
                            "object": {
                              "type": "ThisExpression",
                              "start": 101,
                              "end": 105
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 110,
                            "end": 111,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
