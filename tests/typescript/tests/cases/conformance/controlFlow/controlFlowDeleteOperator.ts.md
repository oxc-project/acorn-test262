__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 28,
                            "end": 29
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 32,
                                  "end": 38
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 41,
                                  "end": 47
                                }
                              ],
                              "start": 32,
                              "end": 47
                            },
                            "start": 30,
                            "end": 47
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 28,
                          "end": 48
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 49,
                            "end": 50
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 52,
                                  "end": 58
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 61,
                                  "end": 67
                                }
                              ],
                              "start": 52,
                              "end": 67
                            },
                            "start": 50,
                            "end": 67
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 49,
                          "end": 67
                        }
                      ],
                      "start": 26,
                      "end": 69
                    },
                    "start": 24,
                    "end": 69
                  },
                  "start": 23,
                  "end": 69
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 75
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 77,
                        "end": 78
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 74,
                      "end": 78
                    }
                  ],
                  "start": 72,
                  "end": 80
                },
                "definite": false,
                "start": 23,
                "end": 80
              }
            ],
            "declare": false,
            "start": 19,
            "end": 81
          },
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
                "start": 86,
                "end": 87
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 86,
              "end": 89
            },
            "directive": null,
            "start": 86,
            "end": 90
          },
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
                "start": 95,
                "end": 96
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 98
              },
              "optional": false,
              "computed": false,
              "start": 95,
              "end": 98
            },
            "directive": null,
            "start": 95,
            "end": 99
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "optional": false,
                "computed": false,
                "start": 104,
                "end": 107
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 110,
                "end": 111
              },
              "start": 104,
              "end": 111
            },
            "directive": null,
            "start": 104,
            "end": 112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                },
                "optional": false,
                "computed": false,
                "start": 117,
                "end": 120
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 123,
                "end": 124
              },
              "start": 117,
              "end": 124
            },
            "directive": null,
            "start": 117,
            "end": 125
          },
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
                "start": 130,
                "end": 131
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "optional": false,
              "computed": false,
              "start": 130,
              "end": 133
            },
            "directive": null,
            "start": 130,
            "end": 134
          },
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
                "start": 139,
                "end": 140
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "optional": false,
              "computed": false,
              "start": 139,
              "end": 142
            },
            "directive": null,
            "start": 139,
            "end": 143
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 155,
                "end": 158
              },
              "prefix": true,
              "start": 148,
              "end": 158
            },
            "directive": null,
            "start": 148,
            "end": 159
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 172
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "optional": false,
                "computed": false,
                "start": 171,
                "end": 174
              },
              "prefix": true,
              "start": 164,
              "end": 174
            },
            "directive": null,
            "start": 164,
            "end": 175
          },
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
                "start": 180,
                "end": 181
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              },
              "optional": false,
              "computed": false,
              "start": 180,
              "end": 183
            },
            "directive": null,
            "start": 180,
            "end": 184
          },
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
                "start": 189,
                "end": 190
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 192
              },
              "optional": false,
              "computed": false,
              "start": 189,
              "end": 192
            },
            "directive": null,
            "start": 189,
            "end": 193
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "directive": null,
            "start": 198,
            "end": 200
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "prefix": true,
              "start": 205,
              "end": 213
            },
            "directive": null,
            "start": 205,
            "end": 214
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "directive": null,
            "start": 233,
            "end": 235
          }
        ],
        "start": 13,
        "end": 237
      },
      "expression": false,
      "start": 0,
      "end": 237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 237
}
```
