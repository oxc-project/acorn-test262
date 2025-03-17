__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 21,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 25,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 38,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 51,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 158,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 77,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 2,
                      "raw": "2"
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 156,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 117,
                    "end": 154,
                    "expression": {
                      "type": "CallExpression",
                      "start": 117,
                      "end": 153,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 117,
                        "end": 128,
                        "object": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 124,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 128,
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
                          "type": "TemplateLiteral",
                          "start": 129,
                          "end": 152,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 145,
                              "end": 150,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 129,
                              "end": 145,
                              "value": {
                                "cooked": "x was set to ",
                                "raw": "x was set to "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 150,
                              "end": 152,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ]
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
      "type": "VariableDeclaration",
      "start": 160,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 172,
            "end": 185,
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 183,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 225,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 224,
        "callee": {
          "type": "MemberExpression",
          "start": 206,
          "end": 217,
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 213,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 214,
            "end": 217,
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
            "type": "MemberExpression",
            "start": 218,
            "end": 223,
            "object": {
              "type": "Identifier",
              "start": 218,
              "end": 221,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
