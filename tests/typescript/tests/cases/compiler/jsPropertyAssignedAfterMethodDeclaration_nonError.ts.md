__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 108,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 107,
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
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 105,
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
                  "end": 105,
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
                    "end": 105,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 81,
                        "end": 99,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 81,
                          "end": 98,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 81,
                            "end": 87,
                            "object": {
                              "type": "ThisExpression",
                              "start": 81,
                              "end": 85
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 86,
                              "end": 87,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "start": 90,
                            "end": 98,
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 96,
                              "end": 98,
                              "body": []
                            },
                            "id": null,
                            "generator": false
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
