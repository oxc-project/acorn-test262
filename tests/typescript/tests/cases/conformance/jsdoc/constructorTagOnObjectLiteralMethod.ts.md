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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
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
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 41
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
                              "start": 46,
                              "end": 50
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 51,
                              "end": 54
                            },
                            "optional": false,
                            "computed": false,
                            "start": 46,
                            "end": 54
                          },
                          "right": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 57,
                            "end": 62
                          },
                          "start": 46,
                          "end": 62
                        },
                        "directive": null,
                        "start": 46,
                        "end": 62
                      }
                    ],
                    "start": 44,
                    "end": 64
                  },
                  "expression": false,
                  "start": 41,
                  "end": 64
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 38,
                "end": 64
              }
            ],
            "start": 12,
            "end": 66
          },
          "definite": false,
          "start": 6,
          "end": 66
        }
      ],
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 76
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "optional": false,
            "computed": false,
            "start": 73,
            "end": 80
          },
          "typeArguments": null,
          "arguments": [],
          "start": 69,
          "end": 82
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 87
        },
        "optional": false,
        "computed": false,
        "start": 68,
        "end": 87
      },
      "directive": null,
      "start": 68,
      "end": 87
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 87
}
```
