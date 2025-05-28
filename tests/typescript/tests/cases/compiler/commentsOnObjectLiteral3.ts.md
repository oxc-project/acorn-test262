__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 295,
            "properties": [
              {
                "type": "Property",
                "start": 23,
                "end": 30,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 29,
                  "end": 30,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 100,
                "end": 122,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 106,
                  "end": 122,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 118,
                    "end": 122,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 157,
                "end": 168,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 162,
                  "decorators": [],
                  "name": "func1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 162,
                  "end": 168,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 165,
                    "end": 168,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 181,
                "end": 213,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 186,
                  "end": 213,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 189,
                    "end": 213,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 193,
                        "end": 210,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 200,
                          "end": 209,
                          "object": {
                            "type": "ThisExpression",
                            "start": 200,
                            "end": 204
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 209,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 241,
                "end": 279,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 246,
                  "end": 279,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 247,
                      "end": 252,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 254,
                    "end": 279,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 258,
                        "end": 276,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 258,
                          "end": 275,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 258,
                            "end": 267,
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 267,
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 275,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
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
