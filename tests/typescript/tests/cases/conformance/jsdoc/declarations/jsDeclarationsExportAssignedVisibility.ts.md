__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
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
                  "start": 33,
                  "end": 44
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
                              "start": 57,
                              "end": 61
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 62,
                              "end": 63
                            },
                            "optional": false,
                            "computed": false,
                            "start": 57,
                            "end": 63
                          },
                          "right": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 66,
                            "end": 68
                          },
                          "start": 57,
                          "end": 68
                        },
                        "directive": null,
                        "start": 57,
                        "end": 69
                      }
                    ],
                    "start": 47,
                    "end": 75
                  },
                  "expression": false,
                  "start": 44,
                  "end": 75
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 33,
                "end": 75
              }
            ],
            "start": 27,
            "end": 77
          },
          "abstract": false,
          "declare": false,
          "start": 17,
          "end": 77
        },
        "start": 0,
        "end": 77
      },
      "directive": null,
      "start": 0,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./obj",
                "raw": "\"./obj\"",
                "start": 20,
                "end": 27
              }
            ],
            "optional": false,
            "start": 12,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 46
      },
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
              "start": 53,
              "end": 64
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
                          "start": 77,
                          "end": 81
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "usage",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 82,
                          "end": 87
                        },
                        "optional": false,
                        "computed": false,
                        "start": 77,
                        "end": 87
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 97
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 90,
                        "end": 99
                      },
                      "start": 77,
                      "end": 99
                    },
                    "directive": null,
                    "start": 77,
                    "end": 100
                  }
                ],
                "start": 67,
                "end": 106
              },
              "expression": false,
              "start": 64,
              "end": 106
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 53,
            "end": 106
          }
        ],
        "start": 47,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 31,
      "end": 108
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 116
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 124
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 124
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Container",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 136
        },
        "start": 110,
        "end": 136
      },
      "directive": null,
      "start": 110,
      "end": 137
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
