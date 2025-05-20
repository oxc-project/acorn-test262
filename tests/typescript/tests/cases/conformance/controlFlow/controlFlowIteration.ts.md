__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 290,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 34,
        "end": 290,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 40,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 44,
                "end": 65,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 65,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 47,
                      "end": 65,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 47,
                          "end": 53
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 56,
                          "end": 65
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 71,
            "end": 288,
            "body": {
              "type": "BlockStatement",
              "start": 84,
              "end": 288,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 94,
                  "end": 282,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 149,
                    "end": 282,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 163,
                        "end": 211,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 170,
                          "end": 211,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 188,
                              "end": 197,
                              "directive": null,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 188,
                                "end": 196,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 189,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 190,
                                  "end": 196,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 168,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 224,
                        "end": 272,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 231,
                          "end": 272,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 249,
                              "end": 258,
                              "directive": null,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 249,
                                "end": 257,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 249,
                                  "end": 250,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 251,
                                  "end": 257,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 229,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 104,
                    "end": 135,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 118,
                        "end": 125,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 118,
                          "end": 124,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 119,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 122,
                            "end": 124,
                            "raw": "\"\"",
                            "value": ""
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 78,
              "end": 82,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 31,
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
