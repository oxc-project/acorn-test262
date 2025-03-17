__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 83,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 83,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 34,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 26,
                    "end": 28,
                    "name": "x"
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 28,
                    "end": 34,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 32,
                      "end": 34,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 39,
                  "end": 81,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 40,
                    "end": 81,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "computed": false,
                              "optional": false
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
