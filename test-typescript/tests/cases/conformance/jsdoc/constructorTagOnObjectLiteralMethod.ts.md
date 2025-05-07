__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 66,
            "properties": [
              {
                "type": "Property",
                "start": 38,
                "end": 64,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 41,
                  "end": 64,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 44,
                    "end": 64,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 46,
                        "end": 62,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 46,
                          "end": 62,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 46,
                            "end": 54,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 46,
                              "end": 50
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 51,
                              "end": 54,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 57,
                            "end": 62,
                            "raw": "\"bar\"",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
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
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 68,
        "end": 87,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 69,
          "end": 82,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 73,
            "end": 80,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
