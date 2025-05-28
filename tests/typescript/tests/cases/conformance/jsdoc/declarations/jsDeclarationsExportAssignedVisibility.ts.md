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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 17,
          "end": 77,
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
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 27,
            "end": 77,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 33,
                "end": 75,
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
                "value": {
                  "type": "FunctionExpression",
                  "start": 44,
                  "end": 75,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 47,
                    "end": 75,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 57,
                        "end": 69,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 57,
                          "end": 68,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 57,
                            "end": 63,
                            "object": {
                              "type": "ThisExpression",
                              "start": 57,
                              "end": 61
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 62,
                              "end": 63,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 66,
                            "end": 68,
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
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
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 19,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 27,
                "value": "./obj",
                "raw": "\"./obj\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 108,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 106,
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
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 106,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 77,
                    "end": 100,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 77,
                      "end": 99,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 77,
                        "end": 87,
                        "object": {
                          "type": "ThisExpression",
                          "start": 77,
                          "end": 81
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 87,
                          "decorators": [],
                          "name": "usage",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "NewExpression",
                        "start": 90,
                        "end": 99,
                        "callee": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 97,
                          "decorators": [],
                          "name": "Obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
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
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 110,
          "end": 124,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 116,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
