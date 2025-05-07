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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 157,
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
            "end": 157,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 25,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 22,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 24,
                  "end": 25,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 31,
                "end": 155,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 37,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 37,
                  "end": 155,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 40,
                    "end": 155,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 50,
                        "end": 55,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 64,
                        "end": 74,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 64,
                          "end": 73,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 64,
                            "end": 68
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 73,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 83,
                        "end": 95,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 83,
                          "end": 94,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 83,
                            "end": 87
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 94,
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 104,
                        "end": 117,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 104,
                          "end": 116,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 116,
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null
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
