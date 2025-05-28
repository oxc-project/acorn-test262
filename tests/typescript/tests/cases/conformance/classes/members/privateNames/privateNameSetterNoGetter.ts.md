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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 83,
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
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 83,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 34,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 26,
                    "end": 28,
                    "name": "x"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 28,
                    "end": 34,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 32,
                      "end": 34,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 39,
                  "end": 81,
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
                  "value": {
                    "type": "FunctionExpression",
                    "start": 40,
                    "end": 81,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 43,
                      "end": 81,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 53,
                          "end": 66,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 53,
                            "end": 65,
                            "operator": "+=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 53,
                              "end": 60,
                              "object": {
                                "type": "ThisExpression",
                                "start": 53,
                                "end": 57
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 58,
                                "end": 60,
                                "name": "x"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 64,
                              "end": 65,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "directive": null
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 110,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 109,
        "callee": {
          "type": "MemberExpression",
          "start": 85,
          "end": 96,
          "object": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 97,
            "end": 108,
            "callee": {
              "type": "MemberExpression",
              "start": 97,
              "end": 106,
              "object": {
                "type": "NewExpression",
                "start": 97,
                "end": 104,
                "callee": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
