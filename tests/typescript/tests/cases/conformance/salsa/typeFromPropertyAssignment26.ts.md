__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 262,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "UI",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 9,
            "end": 11,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 95,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 26,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "UI",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 26,
            "decorators": [],
            "name": "TreeElement",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 29,
          "end": 94,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 35,
            "end": 94,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 41,
                "end": 92,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 52,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 52,
                  "end": 92,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 55,
                    "end": 92,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 65,
                        "end": 86,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 65,
                          "end": 86,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 65,
                            "end": 81,
                            "object": {
                              "type": "ThisExpression",
                              "start": 65,
                              "end": 69
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 81,
                              "decorators": [],
                              "name": "treeOutline",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 84,
                            "end": 86,
                            "value": 12,
                            "raw": "12"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null
              }
            ]
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 129,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 106,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 98,
            "decorators": [],
            "name": "UI",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 106,
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "NewExpression",
          "start": 109,
          "end": 129,
          "callee": {
            "type": "MemberExpression",
            "start": 113,
            "end": 127,
            "object": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "decorators": [],
              "name": "UI",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 116,
              "end": 127,
              "decorators": [],
              "name": "TreeElement",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 131,
      "end": 261,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 147,
        "end": 161,
        "object": {
          "type": "Identifier",
          "start": 147,
          "end": 149,
          "decorators": [],
          "name": "UI",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 150,
          "end": 161,
          "decorators": [],
          "name": "TreeElement",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 261,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 259,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 178,
              "decorators": [],
              "name": "onpopulate",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 259,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 259,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 208,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 191,
                      "end": 208,
                      "object": {
                        "type": "ThisExpression",
                        "start": 191,
                        "end": 195
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 208,
                        "decorators": [],
                        "name": "doesNotExist",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 253,
                    "expression": {
                      "type": "CallExpression",
                      "start": 217,
                      "end": 253,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 251,
                        "object": {
                          "type": "MemberExpression",
                          "start": 217,
                          "end": 233,
                          "object": {
                            "type": "ThisExpression",
                            "start": 217,
                            "end": 221
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 233,
                            "decorators": [],
                            "name": "treeOutline",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 251,
                          "decorators": [],
                          "name": "doesntExistEither",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 261,
      "end": 262
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
