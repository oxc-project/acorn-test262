__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 81,
                              "end": 85
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 86,
                              "end": 87
                            },
                            "optional": false,
                            "computed": false,
                            "start": 81,
                            "end": 87
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 96,
                              "end": 98
                            },
                            "id": null,
                            "generator": false,
                            "start": 90,
                            "end": 98
                          },
                          "start": 81,
                          "end": 98
                        },
                        "directive": null,
                        "start": 81,
                        "end": 99
                      }
                    ],
                    "start": 20,
                    "end": 105
                  },
                  "expression": false,
                  "start": 17,
                  "end": 105
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 105
              }
            ],
            "start": 10,
            "end": 107
          },
          "definite": false,
          "start": 6,
          "end": 107
        }
      ],
      "declare": false,
      "start": 0,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
