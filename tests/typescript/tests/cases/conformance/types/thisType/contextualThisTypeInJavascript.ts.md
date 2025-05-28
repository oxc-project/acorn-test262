__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 157,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 157,
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
            "end": 157,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 25,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 22,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 24,
                  "end": 25,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 31,
                "end": 155,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 37,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 37,
                  "end": 155,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 40,
                    "end": 155,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 50,
                        "end": 55,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 64,
                        "end": 74,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 64,
                          "end": 73,
                          "object": {
                            "type": "ThisExpression",
                            "start": 64,
                            "end": 68
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 73,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 83,
                        "end": 95,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 83,
                          "end": 94,
                          "object": {
                            "type": "ThisExpression",
                            "start": 83,
                            "end": 87
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 94,
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 104,
                        "end": 117,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 104,
                          "end": 116,
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 116,
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
