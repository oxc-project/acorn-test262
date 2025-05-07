__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 35,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 23,
            "end": 33,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 23,
              "end": 33,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 23,
                "end": 29,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 23,
                  "end": 27
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 32,
                "end": 33,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 106,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 106,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 47,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 41,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 50,
          "end": 106,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 58,
            "end": 106,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 64,
                "end": 104,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 75,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "constructor",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 75,
                  "end": 104,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 78,
                    "end": 104,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 88,
                        "end": 98,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 88,
                          "end": 98,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 88,
                            "end": 94,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 88,
                              "end": 92
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 97,
                            "end": 98,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
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
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 139,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 135,
        "end": 139,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 135,
          "end": 137,
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 138,
          "end": 139,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "decorators": [],
            "name": "oc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 178,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 174,
        "end": 178,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 174,
          "end": 176,
          "decorators": [],
          "name": "oc",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
