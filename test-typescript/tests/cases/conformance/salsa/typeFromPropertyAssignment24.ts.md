__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 201,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 83,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 66,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 47,
            "end": 58,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "Message",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 69,
          "end": 83,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 80,
            "end": 83,
            "body": []
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
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 94,
            "end": 111,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 98,
              "end": 109,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 98,
                "end": 103,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 109,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 118,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 112,
        "end": 118,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 112,
          "end": 113,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 114,
          "end": 118,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "x",
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
      "start": 194,
      "end": 200,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 194,
        "end": 200,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 194,
          "end": 195,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 196,
          "end": 200,
          "decorators": [],
          "name": "name",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
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
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 69,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 15,
          "end": 26,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 20,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 21,
            "end": 26,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 29,
          "end": 69,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 35,
            "end": 69,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 39,
                "end": 67,
                "accessibility": null,
                "computed": false,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 43,
                  "end": 67,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 46,
                    "end": 67,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 52,
                        "end": 63,
                        "argument": {
                          "type": "Literal",
                          "start": 59,
                          "end": 63,
                          "raw": "'hi'",
                          "value": "hi"
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
          "id": null,
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
