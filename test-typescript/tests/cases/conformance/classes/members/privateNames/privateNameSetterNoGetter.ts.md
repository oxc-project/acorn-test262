__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 83,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 83,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 34,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 26,
                    "end": 28,
                    "name": "x"
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 28,
                    "end": 34,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 32,
                      "end": 34,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
                        "decorators": [],
                        "name": "x",
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
                  "start": 39,
                  "end": 81,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
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
                    "start": 40,
                    "end": 81,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 43,
                      "end": 81,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 53,
                          "end": 66,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 53,
                            "end": 65,
                            "operator": "+=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 53,
                              "end": 60,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 53,
                                "end": 57
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 58,
                                "end": 60,
                                "name": "x"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 64,
                              "end": 65,
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
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 110,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 109,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 97,
            "end": 108,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 97,
              "end": 106,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 97,
                "end": 104,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 85,
          "end": 96,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "decorators": [],
            "name": "log",
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
