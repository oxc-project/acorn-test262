__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Log",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 36,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 20,
                  "decorators": [],
                  "name": "info",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 20,
                  "end": 36,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 34,
                    "end": 36,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 21,
                      "end": 32,
                      "decorators": [],
                      "name": "msg",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 24,
                        "end": 32,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 26,
                          "end": 32
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 162,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 162,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 100,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 72,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 100,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 100,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 73,
                  "end": 93,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 93,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 87,
                        "end": 93
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 160,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "hello",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 160,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 160,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 156,
                    "expression": {
                      "type": "CallExpression",
                      "start": 125,
                      "end": 155,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "start": 134,
                          "end": 154,
                          "expressions": [
                            {
                              "type": "MemberExpression",
                              "start": 143,
                              "end": 152,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 143,
                                "end": 147
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 148,
                                "end": 152,
                                "decorators": [],
                                "name": "name",
                                "optional": false
                              }
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 134,
                              "end": 143,
                              "tail": false,
                              "value": {
                                "cooked": "Hello ",
                                "raw": "Hello "
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 152,
                              "end": 154,
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
                        "start": 125,
                        "end": 133,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 128,
                          "decorators": [],
                          "name": "Log",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 133,
                          "decorators": [],
                          "name": "info",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 56,
        "decorators": [],
        "name": "HelloWorld",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
