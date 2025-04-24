__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 17,
          "end": 77,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 27,
            "end": 77,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 33,
                "end": 75,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 44,
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
                  "start": 44,
                  "end": 75,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 47,
                    "end": 75,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 57,
                        "end": 69,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 57,
                          "end": 68,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 57,
                            "end": 63,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 57,
                              "end": 61
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 62,
                              "end": 63,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 66,
                            "end": 68,
                            "raw": "12",
                            "value": 12
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
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 28,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 27,
                "raw": "\"./obj\"",
                "value": "./obj"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 19,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 64,
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
              "start": 64,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 77,
                    "end": 100,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 77,
                      "end": 99,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 77,
                        "end": 87,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 77,
                          "end": 81
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 87,
                          "decorators": [],
                          "name": "usage",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 90,
                        "end": 99,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 97,
                          "decorators": [],
                          "name": "Obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
        "start": 37,
        "end": 46,
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 110,
          "end": 124,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 116,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 127,
          "end": 136,
          "decorators": [],
          "name": "Container",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
