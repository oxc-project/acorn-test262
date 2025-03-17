__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 18,
              "end": 22,
              "name": "foo"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 36,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 32,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 26,
                      "end": 32
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 36,
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
            "start": 41,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 122,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 122,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 57,
                    "end": 86,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 61,
                        "end": 85,
                        "id": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "AssignmentExpression",
                          "start": 66,
                          "end": 84,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 66,
                            "end": 75,
                            "object": {
                              "type": "ThisExpression",
                              "start": 66,
                              "end": 70
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 71,
                              "end": 75,
                              "name": "foo"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 78,
                            "end": 84,
                            "left": {
                              "type": "Literal",
                              "start": 78,
                              "end": 80,
                              "value": 42,
                              "raw": "42"
                            },
                            "operator": "*",
                            "right": {
                              "type": "Literal",
                              "start": 83,
                              "end": 84,
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 95,
                    "end": 110,
                    "expression": {
                      "type": "CallExpression",
                      "start": 95,
                      "end": 109,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 95,
                        "end": 106,
                        "object": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 102,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 106,
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
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 140,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 139,
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 137,
          "object": {
            "type": "NewExpression",
            "start": 126,
            "end": 133,
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
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
            "start": 134,
            "end": 137,
            "name": "bar",
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
