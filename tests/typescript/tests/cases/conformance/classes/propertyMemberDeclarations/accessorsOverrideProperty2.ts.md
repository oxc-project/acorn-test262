__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
              "start": 19,
              "end": 20,
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
      "start": 25,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 158,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
              "start": 61,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 66,
                    "end": 75,
                    "argument": {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
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
            "start": 102,
            "end": 156,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
              "start": 107,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 117,
                    "end": 154,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 117,
                      "end": 153,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "start": 129,
                          "end": 152,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 145,
                              "end": 150,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 129,
                              "end": 145,
                              "tail": false,
                              "value": {
                                "cooked": "x was set to ",
                                "raw": "x was set to "
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 150,
                              "end": 152,
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
                        "start": 117,
                        "end": 128,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 124,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 128,
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
                  "start": 108,
                  "end": 113,
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
        "start": 31,
        "end": 38,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 51,
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
      "start": 160,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 172,
            "end": 185,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 183,
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
      "start": 206,
      "end": 225,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 224,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 218,
            "end": 223,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 218,
              "end": 221,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 206,
          "end": 217,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 213,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 214,
            "end": 217,
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
