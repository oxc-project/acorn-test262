__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FancyError",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 16
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 30
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 48
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 55
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 67,
                        "end": 72
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "error with status ",
                                "cooked": "error with status "
                              },
                              "tail": false,
                              "start": 73,
                              "end": 94
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 100,
                              "end": 102
                            }
                          ],
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "status",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 94,
                              "end": 100
                            }
                          ],
                          "start": 73,
                          "end": 102
                        }
                      ],
                      "optional": false,
                      "start": 67,
                      "end": 103
                    },
                    "directive": null,
                    "start": 67,
                    "end": 104
                  }
                ],
                "start": 57,
                "end": 110
              },
              "expression": false,
              "start": 48,
              "end": 110
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 37,
            "end": 110
          }
        ],
        "start": 31,
        "end": 112
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 128
          },
          "optional": false,
          "computed": false,
          "start": 114,
          "end": 128
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "FancyError",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 147
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "FancyError",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 147
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 137,
              "end": 147
            }
          ],
          "start": 131,
          "end": 149
        },
        "start": 114,
        "end": 149
      },
      "directive": null,
      "start": 114,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 151
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "errors",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 48
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 58
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./errors",
                "raw": "\"./errors\"",
                "start": 59,
                "end": 69
              }
            ],
            "optional": false,
            "start": 51,
            "end": 70
          },
          "definite": false,
          "start": 42,
          "end": 70
        }
      ],
      "declare": false,
      "start": 36,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 79
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 87
          },
          "optional": false,
          "computed": false,
          "start": 73,
          "end": 87
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "errors",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 102
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "errors",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 102
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 96,
              "end": 102
            }
          ],
          "start": 90,
          "end": 104
        },
        "start": 73,
        "end": 104
      },
      "directive": null,
      "start": 73,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 105
}
```
