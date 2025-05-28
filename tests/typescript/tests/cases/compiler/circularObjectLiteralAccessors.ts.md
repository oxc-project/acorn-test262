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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 197,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 40,
                  "end": 182,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 50,
                      "end": 105,
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 57,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 57,
                        "end": 105,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
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
                                "object": {
                                  "type": "Identifier",
                                  "start": 89,
                                  "end": 90,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 94,
                                  "decorators": [],
                                  "name": "foo",
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
                      "start": 115,
                      "end": 176,
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 122,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 122,
                        "end": 176,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 138,
                          "end": 176,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 152,
                              "end": 166,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 152,
                                "end": 165,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 152,
                                  "end": 157,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 152,
                                    "end": 153,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 154,
                                    "end": 157,
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 188,
                "end": 195,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 191,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 193,
                  "end": 195,
                  "value": "",
                  "raw": "''"
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
