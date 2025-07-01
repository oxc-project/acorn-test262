__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "UI",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 9,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "UI",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "TreeElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 26
          },
          "optional": false,
          "computed": false,
          "start": 12,
          "end": 26
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 52
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 65,
                              "end": 69
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "treeOutline",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 81
                            },
                            "optional": false,
                            "computed": false,
                            "start": 65,
                            "end": 81
                          },
                          "right": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 84,
                            "end": 86
                          },
                          "start": 65,
                          "end": 86
                        },
                        "directive": null,
                        "start": 65,
                        "end": 86
                      }
                    ],
                    "start": 55,
                    "end": 92
                  },
                  "expression": false,
                  "start": 52,
                  "end": 92
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 41,
                "end": 92
              }
            ],
            "start": 35,
            "end": 94
          },
          "abstract": false,
          "declare": false,
          "start": 29,
          "end": 94
        },
        "start": 12,
        "end": 94
      },
      "directive": null,
      "start": 12,
      "end": 95
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
            "name": "UI",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 106
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 106
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "UI",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "TreeElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 127
            },
            "optional": false,
            "computed": false,
            "start": 113,
            "end": 127
          },
          "typeArguments": null,
          "arguments": [],
          "start": 109,
          "end": 129
        },
        "start": 96,
        "end": 129
      },
      "directive": null,
      "start": 96,
      "end": 129
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 138
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "UI",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 149
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "TreeElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 161
        },
        "optional": false,
        "computed": false,
        "start": 147,
        "end": 161
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onpopulate",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 178
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 191,
                        "end": 195
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doesNotExist",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 208
                      },
                      "optional": false,
                      "computed": false,
                      "start": 191,
                      "end": 208
                    },
                    "directive": null,
                    "start": 191,
                    "end": 208
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 217,
                            "end": 221
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "treeOutline",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 233
                          },
                          "optional": false,
                          "computed": false,
                          "start": 217,
                          "end": 233
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doesntExistEither",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 251
                        },
                        "optional": false,
                        "computed": false,
                        "start": 217,
                        "end": 251
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 217,
                      "end": 253
                    },
                    "directive": null,
                    "start": 217,
                    "end": 253
                  }
                ],
                "start": 181,
                "end": 259
              },
              "expression": false,
              "start": 178,
              "end": 259
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 168,
            "end": 259
          }
        ],
        "start": 162,
        "end": 261
      },
      "abstract": false,
      "declare": false,
      "start": 131,
      "end": 261
    },
    {
      "type": "EmptyStatement",
      "start": 261,
      "end": 262
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 262
}
```
