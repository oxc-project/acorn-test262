__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 112,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 110,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 48,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 110,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 104,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 67,
                      "end": 103,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "start": 73,
                          "end": 102,
                          "expressions": [
                            {
                              "type": "Identifier",
                              "start": 94,
                              "end": 100,
                              "decorators": [],
                              "name": "status",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 73,
                              "end": 94,
                              "tail": false,
                              "value": {
                                "cooked": "error with status ",
                                "raw": "error with status "
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 100,
                              "end": 102,
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
                        "type": "Super",
                        "start": 67,
                        "end": 72
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
                  "start": 49,
                  "end": 55,
                  "decorators": [],
                  "name": "status",
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
        "end": 16,
        "decorators": [],
        "name": "FancyError",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 25,
        "end": 30,
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 150,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 149,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 114,
          "end": 128,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 120,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 131,
          "end": 149,
          "properties": [
            {
              "type": "Property",
              "start": 137,
              "end": 147,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 137,
                "end": 147,
                "decorators": [],
                "name": "FancyError",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 137,
                "end": 147,
                "decorators": [],
                "name": "FancyError",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 48,
            "decorators": [],
            "name": "errors",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 51,
            "end": 70,
            "arguments": [
              {
                "type": "Literal",
                "start": 59,
                "end": 69,
                "raw": "\"./errors\"",
                "value": "./errors"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 51,
              "end": 58,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 73,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 73,
          "end": 87,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 73,
            "end": 79,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 90,
          "end": 104,
          "properties": [
            {
              "type": "Property",
              "start": 96,
              "end": 102,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 102,
                "decorators": [],
                "name": "errors",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 96,
                "end": 102,
                "decorators": [],
                "name": "errors",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
