__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 291,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "ff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 65,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 190,
                                  "end": 196,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 251,
                                  "end": 257,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
