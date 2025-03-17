__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 36,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 25,
                    "end": 34,
                    "argument": {
                      "type": "Literal",
                      "start": 32,
                      "end": 33,
                      "raw": "2",
                      "value": 2
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
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 54,
                    "end": 91,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 54,
                      "end": 90,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "start": 66,
                          "end": 89,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 82,
                              "end": 87,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 66,
                              "end": 82,
                              "tail": false,
                              "value": {
                                "cooked": "x was set to ",
                                "raw": "x was set to "
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 87,
                              "end": 89,
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 54,
                        "end": 65,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 61,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 65,
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
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 45,
                  "end": 50,
                  "decorators": [],
                  "name": "value",
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
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
      "start": 97,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 132,
              "end": 133,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 110,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 123,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 147,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 150,
            "end": 163,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 161,
              "decorators": [],
              "name": "Derived",
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
      "start": 192,
      "end": 211,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 210,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 204,
            "end": 209,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 207,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 192,
          "end": 203,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 192,
            "end": 199,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
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
