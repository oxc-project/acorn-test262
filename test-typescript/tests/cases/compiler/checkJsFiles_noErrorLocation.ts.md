__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
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
              "start": 36,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 45,
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
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 73,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 73,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 69,
                    "argument": {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
                      "raw": "4",
                      "value": 4
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
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 155,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
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
              "start": 110,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 127,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 126,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 132,
                    "end": 151,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 132,
                      "end": 150,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 132,
                        "end": 140,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 143,
                        "end": 150,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 149,
                          "end": 150,
                          "raw": "3",
                          "value": 3
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
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
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 169,
            "end": 176,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 185,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 183,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
