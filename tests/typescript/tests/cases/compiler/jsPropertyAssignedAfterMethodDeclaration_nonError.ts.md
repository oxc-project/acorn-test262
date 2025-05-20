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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 107,
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
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 105,
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
                  "end": 105,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 20,
                    "end": 105,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 81,
                        "end": 99,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 81,
                          "end": 98,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 81,
                            "end": 87,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 81,
                              "end": 85
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 86,
                              "end": 87,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "start": 90,
                            "end": 98,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 96,
                              "end": 98,
                              "body": []
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
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
