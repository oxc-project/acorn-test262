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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 110,
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
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 110,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 110,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 104,
                    "expression": {
                      "type": "CallExpression",
                      "start": 67,
                      "end": 103,
                      "callee": {
                        "type": "Super",
                        "start": 67,
                        "end": 72
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "start": 73,
                          "end": 102,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 73,
                              "end": 94,
                              "value": {
                                "cooked": "error with status ",
                                "raw": "error with status "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 100,
                              "end": 102,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
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
            "kind": "constructor",
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
      "type": "ExpressionStatement",
      "start": 114,
      "end": 150,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 149,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 114,
          "end": 128,
          "object": {
            "type": "Identifier",
            "start": 114,
            "end": 120,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 128,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 137,
                "end": 147,
                "decorators": [],
                "name": "FancyError",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 137,
                "end": 147,
                "decorators": [],
                "name": "FancyError",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 70,
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
            "callee": {
              "type": "Identifier",
              "start": 51,
              "end": 58,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 59,
                "end": 69,
                "value": "./errors",
                "raw": "\"./errors\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 73,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 73,
          "end": 87,
          "object": {
            "type": "Identifier",
            "start": 73,
            "end": 79,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 102,
                "decorators": [],
                "name": "errors",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 96,
                "end": 102,
                "decorators": [],
                "name": "errors",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
