__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 289,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 44,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 44,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 27,
            "end": 42,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 27,
              "end": 41,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 27,
                "end": 36,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 27,
                  "end": 31
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 36,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 39,
                "end": 41,
                "properties": []
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
        "end": 18,
        "decorators": [],
        "name": "Multimap3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 44,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 210,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 66,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 69,
          "end": 210,
          "properties": [
            {
              "type": "Property",
              "start": 156,
              "end": 208,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 156,
                "end": 159,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 159,
                "end": 208,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 165,
                  "end": 208,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 175,
                      "end": 202,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 201,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 182,
                          "end": 191,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 182,
                            "end": 186
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 187,
                            "end": 191,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "BinaryExpression",
                          "start": 192,
                          "end": 200,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 195,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 198,
                            "end": 200,
                            "raw": "''",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
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
                    "start": 160,
                    "end": 163,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 249,
            "end": 264,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 253,
              "end": 262,
              "decorators": [],
              "name": "Multimap3",
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
      "type": "VariableDeclaration",
      "start": 266,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 289,
            "arguments": [
              {
                "type": "Literal",
                "start": 284,
                "end": 288,
                "raw": "'hi'",
                "value": "hi",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 276,
              "end": 283,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 276,
                "end": 279,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 283,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
