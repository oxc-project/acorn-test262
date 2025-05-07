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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 158,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 158,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 154,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 129,
                      "end": 153,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 142,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 129,
                          "end": 133
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 142,
                          "decorators": [],
                          "name": "compiler",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 113,
                  "end": 121,
                  "decorators": [],
                  "name": "compiler",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "MW",
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
      "start": 162,
      "end": 182,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 181,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 162,
          "end": 176,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 168,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 25,
                "raw": "\"./MW\"",
                "value": "./MW",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
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
      "type": "ExpressionStatement",
      "start": 81,
      "end": 176,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 81,
          "end": 95,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 95,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 98,
          "end": 175,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 112,
            "end": 175,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 141,
                "end": 151,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 145,
                    "end": 151,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 149,
                      "end": 151,
                      "properties": []
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              {
                "type": "ReturnStatement",
                "start": 156,
                "end": 173,
                "argument": {
                  "type": "NewExpression",
                  "start": 163,
                  "end": 172,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 169,
                    "decorators": [],
                    "name": "MW",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 109,
            "decorators": [],
            "name": "MC",
            "optional": false,
            "typeAnnotation": null
          },
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
