__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 43,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 25,
              "end": 43,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 31,
                  "end": 41,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 31,
                    "end": 41,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 31,
                      "end": 37,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 31,
                        "end": 35
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
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
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 55,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 58,
          "end": 114,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 66,
            "end": 114,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 72,
                "end": 112,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 83,
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
                  "start": 83,
                  "end": 112,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 86,
                    "end": 112,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 96,
                        "end": 106,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 96,
                          "end": 106,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 96,
                            "end": 102,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 96,
                              "end": 100
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 105,
                            "end": 106,
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
            "start": 64,
            "end": 65,
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
      "start": 136,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "decorators": [],
            "name": "ja",
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
      "start": 143,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 143,
        "end": 147,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 143,
          "end": 145,
          "decorators": [],
          "name": "ja",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 181,
            "decorators": [],
            "name": "da",
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
      "start": 182,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 182,
        "end": 186,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 182,
          "end": 184,
          "decorators": [],
          "name": "da",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
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
