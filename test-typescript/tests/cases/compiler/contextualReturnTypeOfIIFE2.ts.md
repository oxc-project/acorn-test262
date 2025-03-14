__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 49,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 26,
            "end": 47,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 46,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 42,
                "end": 46
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "app",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 146,
      "expression": {
        "type": "AssignmentExpression",
        "start": 51,
        "end": 145,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 51,
          "end": 62,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 51,
            "end": 58,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "app",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 65,
          "end": 145,
          "arguments": [],
          "callee": {
            "type": "FunctionExpression",
            "start": 66,
            "end": 142,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 78,
              "end": 142,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 118,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 117,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 95,
                        "decorators": [],
                        "name": "someFun",
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 98,
                        "end": 117,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 115,
                          "end": 117,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 99,
                            "end": 110,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              }
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
                  "type": "ReturnStatement",
                  "start": 121,
                  "end": 140,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 128,
                    "end": 139,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 130,
                        "end": 137,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 137,
                          "decorators": [],
                          "name": "someFun",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 137,
                          "decorators": [],
                          "name": "someFun",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 170,
        "arguments": [
          {
            "type": "Literal",
            "start": 168,
            "end": 169,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 148,
          "end": 167,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 148,
            "end": 159,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 148,
              "end": 155,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 148,
                "end": 151,
                "decorators": [],
                "name": "app",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 167,
            "decorators": [],
            "name": "someFun",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
