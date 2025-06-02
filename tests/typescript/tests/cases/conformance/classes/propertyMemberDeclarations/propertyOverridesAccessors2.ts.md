__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 36,
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
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 36,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 2,
                      "raw": "2"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 93,
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
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 93,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 54,
                    "end": 91,
                    "expression": {
                      "type": "CallExpression",
                      "start": 54,
                      "end": 90,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 54,
                        "end": 65,
                        "object": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 61,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 65,
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
                          "type": "TemplateLiteral",
                          "start": 66,
                          "end": 89,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 66,
                              "end": 82,
                              "value": {
                                "raw": "x was set to ",
                                "cooked": "x was set to "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 87,
                              "end": 89,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true
                            }
                          ],
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
                          ]
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
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
    {
      "type": "ClassDeclaration",
      "start": 97,
      "end": 136,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 134,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 132,
              "end": 133,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 164,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 163,
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
            "callee": {
              "type": "Identifier",
              "start": 154,
              "end": 161,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 211,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 210,
        "callee": {
          "type": "MemberExpression",
          "start": 192,
          "end": 203,
          "object": {
            "type": "Identifier",
            "start": 192,
            "end": 199,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
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
            "type": "MemberExpression",
            "start": 204,
            "end": 209,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 207,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
