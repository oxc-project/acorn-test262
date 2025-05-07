__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 136,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 136,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 136,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 55,
              "end": 96,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 66,
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
                "start": 66,
                "end": 96,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 70,
                  "end": 96,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 80,
                      "end": 90,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 80,
                        "end": 90,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 86,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 86,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 90,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 134,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 102,
                "end": 134,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 105,
                  "end": 134,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 115,
                      "end": 128,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 122,
                        "end": 128,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 122,
                          "end": 126
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
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
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "Crunch",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 163,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9,
            "end": 24,
            "arguments": [
              {
                "type": "Literal",
                "start": 17,
                "end": 23,
                "raw": "'./ex'",
                "value": "./ex",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 9,
              "end": 16,
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "decorators": [],
            "name": "crunch",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 54,
            "end": 70,
            "arguments": [
              {
                "type": "Literal",
                "start": 68,
                "end": 69,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 58,
              "end": 67,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 58,
                "end": 60,
                "decorators": [],
                "name": "ex",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Crunch",
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
      "start": 72,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 72,
        "end": 80,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 72,
          "end": 78,
          "decorators": [],
          "name": "crunch",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 163,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 149,
        "end": 163,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 155,
            "end": 161,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 155,
              "end": 161,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 155,
                "end": 159,
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
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
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 147,
          "decorators": [],
          "name": "wrap",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
