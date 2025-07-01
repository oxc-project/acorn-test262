__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              },
              "start": 8,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 47,
                      "end": 65
                    },
                    "start": 45,
                    "end": 65
                  },
                  "start": 44,
                  "end": 65
                },
                "init": null,
                "definite": false,
                "start": 44,
                "end": 65
              }
            ],
            "declare": false,
            "start": 40,
            "end": 66
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 78,
              "end": 82
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 102
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 119
                          },
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 122,
                            "end": 124
                          },
                          "start": 118,
                          "end": 124
                        },
                        "directive": null,
                        "start": 118,
                        "end": 125
                      }
                    ],
                    "start": 104,
                    "end": 135
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 167,
                          "end": 168
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 189
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 190,
                                  "end": 196
                                },
                                "optional": false,
                                "computed": false,
                                "start": 188,
                                "end": 196
                              },
                              "directive": null,
                              "start": 188,
                              "end": 197
                            }
                          ],
                          "start": 170,
                          "end": 211
                        },
                        "alternate": null,
                        "start": 163,
                        "end": 211
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 229
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 249,
                                  "end": 250
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 251,
                                  "end": 257
                                },
                                "optional": false,
                                "computed": false,
                                "start": 249,
                                "end": 257
                              },
                              "directive": null,
                              "start": 249,
                              "end": 258
                            }
                          ],
                          "start": 231,
                          "end": 272
                        },
                        "alternate": null,
                        "start": 224,
                        "end": 272
                      }
                    ],
                    "start": 149,
                    "end": 282
                  },
                  "start": 94,
                  "end": 282
                }
              ],
              "start": 84,
              "end": 288
            },
            "start": 71,
            "end": 288
          }
        ],
        "start": 34,
        "end": 290
      },
      "expression": false,
      "start": 20,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 290
}
```
