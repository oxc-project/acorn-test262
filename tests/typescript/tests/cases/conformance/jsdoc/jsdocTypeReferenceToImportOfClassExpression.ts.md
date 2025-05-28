__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 183,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 160,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "MW",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 158,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 158,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 121,
                  "decorators": [],
                  "name": "compiler",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 158,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 154,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 129,
                      "end": 153,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 142,
                        "object": {
                          "type": "ThisExpression",
                          "start": 129,
                          "end": 133
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 142,
                          "decorators": [],
                          "name": "compiler",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 153,
                        "decorators": [],
                        "name": "compiler",
                        "optional": false,
                        "typeAnnotation": null
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
      "start": 162,
      "end": 182,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 181,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 162,
          "end": 176,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 168,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
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
          "start": 179,
          "end": 181,
          "decorators": [],
          "name": "MW",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "MW",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 26,
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 25,
                "value": "./MW",
                "raw": "\"./MW\""
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
      "type": "ExpressionStatement",
      "start": 63,
      "end": 134,
      "expression": {
        "type": "AssignmentExpression",
        "start": 63,
        "end": 133,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 63,
          "end": 77,
          "object": {
            "type": "Identifier",
            "start": 63,
            "end": 69,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 77,
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
          "start": 80,
          "end": 133,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 88,
            "decorators": [],
            "name": "MC",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 89,
            "end": 133,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 93,
                "end": 131,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 98,
                  "decorators": [],
                  "name": "watch",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 98,
                  "end": 131,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 101,
                    "end": 131,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 107,
                        "end": 127,
                        "argument": {
                          "type": "NewExpression",
                          "start": 114,
                          "end": 126,
                          "callee": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 120,
                            "decorators": [],
                            "name": "MW",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 121,
                              "end": 125
                            }
                          ]
                        }
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
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
