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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 22
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 24,
                  "end": 25
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 18,
                "end": 25
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 37
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
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        },
                        "directive": null,
                        "start": 50,
                        "end": 55
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 64,
                            "end": 68
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 69,
                            "end": 73
                          },
                          "optional": false,
                          "computed": false,
                          "start": 64,
                          "end": 73
                        },
                        "directive": null,
                        "start": 64,
                        "end": 74
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 83,
                            "end": 87
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 94
                          },
                          "optional": false,
                          "computed": false,
                          "start": 83,
                          "end": 94
                        },
                        "directive": null,
                        "start": 83,
                        "end": 95
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 116
                          },
                          "optional": false,
                          "computed": false,
                          "start": 104,
                          "end": 116
                        },
                        "directive": null,
                        "start": 104,
                        "end": 117
                      }
                    ],
                    "start": 40,
                    "end": 155
                  },
                  "expression": false,
                  "start": 37,
                  "end": 155
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 31,
                "end": 155
              }
            ],
            "start": 12,
            "end": 157
          },
          "definite": false,
          "start": 6,
          "end": 157
        }
      ],
      "declare": false,
      "start": 0,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
