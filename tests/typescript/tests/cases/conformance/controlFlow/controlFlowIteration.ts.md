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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 290,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 31,
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 34,
        "end": 290,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 40,
            "end": 66,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 44,
                "end": 65,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 71,
            "end": 288,
            "test": {
              "type": "Literal",
              "start": 78,
              "end": 82,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 84,
              "end": 288,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 94,
                  "end": 282,
                  "test": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
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
                            "value": "",
                            "raw": "\"\""
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 149,
                    "end": 282,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 163,
                        "end": 211,
                        "test": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 168,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 170,
                          "end": 211,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 188,
                              "end": 197,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 188,
                                "end": 196,
                                "object": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 189,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 190,
                                  "end": 196,
                                  "decorators": [],
                                  "name": "length",
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
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "start": 224,
                        "end": 272,
                        "test": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 229,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 231,
                          "end": 272,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 249,
                              "end": 258,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 249,
                                "end": 257,
                                "object": {
                                  "type": "Identifier",
                                  "start": 249,
                                  "end": 250,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 251,
                                  "end": 257,
                                  "decorators": [],
                                  "name": "length",
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
                        "alternate": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
