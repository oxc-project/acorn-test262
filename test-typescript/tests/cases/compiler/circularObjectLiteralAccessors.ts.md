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
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 57,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 57,
                        "end": 105,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 94,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 59,
                          "end": 67,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 61,
                            "end": 67
                          }
                        }
                      },
                      "kind": "get",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 115,
                      "end": 176,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 122,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 122,
                        "end": 176,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 123,
                            "end": 136,
                            "name": "value",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 128,
                              "end": 136,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 130,
                                "end": 136
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 154,
                                    "end": 157,
                                    "name": "foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 160,
                                  "end": 165,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "set",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 188,
                "end": 195,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 191,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 193,
                  "end": 195,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
