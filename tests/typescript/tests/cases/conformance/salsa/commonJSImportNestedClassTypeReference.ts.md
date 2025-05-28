__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 11,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 31,
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 30,
                "value": "./mod1",
                "raw": "\"./mod1\""
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
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 85,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 73,
            "end": 83,
            "expression": {
              "type": "CallExpression",
              "start": 73,
              "end": 83,
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 81,
                "object": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 81,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 9,
            "end": 11,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 74,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 74,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 16,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 18,
          "end": 74,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 24,
            "end": 74,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 30,
                "end": 72,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 36,
                  "end": 72,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 39,
                    "end": 72,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 49,
                        "end": 66,
                        "argument": {
                          "type": "NewExpression",
                          "start": 56,
                          "end": 66,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 60,
                            "end": 64,
                            "object": {
                              "type": "Identifier",
                              "start": 60,
                              "end": 62,
                              "decorators": [],
                              "name": "NS",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 64,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": []
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "kind": "method",
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
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 84,
          "object": {
            "type": "Identifier",
            "start": 75,
            "end": 82,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 87,
          "end": 91,
          "object": {
            "type": "Identifier",
            "start": 87,
            "end": 89,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
