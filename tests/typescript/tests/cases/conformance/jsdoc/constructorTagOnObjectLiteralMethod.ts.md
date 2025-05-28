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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 66,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 41,
                  "end": 64,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 44,
                    "end": 64,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 46,
                        "end": 62,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 46,
                          "end": 62,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 46,
                            "end": 54,
                            "object": {
                              "type": "ThisExpression",
                              "start": 46,
                              "end": 50
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 51,
                              "end": 54,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 57,
                            "end": 62,
                            "value": "bar",
                            "raw": "\"bar\""
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
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 87,
      "expression": {
        "type": "MemberExpression",
        "start": 68,
        "end": 87,
        "object": {
          "type": "NewExpression",
          "start": 69,
          "end": 82,
          "callee": {
            "type": "MemberExpression",
            "start": 73,
            "end": 80,
            "object": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
