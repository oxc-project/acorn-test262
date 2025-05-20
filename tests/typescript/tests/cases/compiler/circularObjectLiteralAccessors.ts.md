__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 198,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 31,
            "end": 197,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 182,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 40,
                  "end": 182,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 50,
                      "end": 105,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 57,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 57,
                        "end": 105,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 68,
                          "end": 105,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 82,
                              "end": 95,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 89,
                                "end": 94,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 89,
                                  "end": 90,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 94,
                                  "decorators": [],
                                  "name": "foo",
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 59,
                          "end": 67,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 61,
                            "end": 67
                          }
                        },
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 115,
                      "end": 176,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 122,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 122,
                        "end": 176,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 138,
                          "end": 176,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 152,
                              "end": 166,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 152,
                                "end": 165,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 152,
                                  "end": 157,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 152,
                                    "end": 153,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 154,
                                    "end": 157,
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 160,
                                  "end": 165,
                                  "decorators": [],
                                  "name": "value",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 123,
                            "end": 136,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 128,
                              "end": 136,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 130,
                                "end": 136
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 188,
                "end": 195,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 191,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 193,
                  "end": 195,
                  "raw": "''",
                  "value": ""
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
