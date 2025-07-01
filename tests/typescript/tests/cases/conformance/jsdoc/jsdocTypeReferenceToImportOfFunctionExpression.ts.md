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
        "name": "MW",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 45
      },
      "typeParameters": null,
      "superClass": null,
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
              "start": 101,
              "end": 112
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
                  "name": "compiler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 121
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 129,
                          "end": 133
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "compiler",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 134,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 129,
                        "end": 142
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "compiler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 153
                      },
                      "start": 129,
                      "end": 153
                    },
                    "directive": null,
                    "start": 129,
                    "end": 154
                  }
                ],
                "start": 123,
                "end": 158
              },
              "expression": false,
              "start": 112,
              "end": 158
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 158
          }
        ],
        "start": 46,
        "end": 160
      },
      "abstract": false,
      "declare": false,
      "start": 37,
      "end": 160
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
            "start": 162,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 176
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "MW",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 181
        },
        "start": 162,
        "end": 181
      },
      "directive": null,
      "start": 162,
      "end": 182
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 183
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
            "name": "MW",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./MW",
                "raw": "\"./MW\"",
                "start": 19,
                "end": 25
              }
            ],
            "optional": false,
            "start": 11,
            "end": 26
          },
          "definite": false,
          "start": 6,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
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
            "start": 81,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 81,
          "end": 95
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MC",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 109
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 149,
                      "end": 151
                    },
                    "definite": false,
                    "start": 145,
                    "end": 151
                  }
                ],
                "declare": false,
                "start": 141,
                "end": 151
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 169
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 171
                    }
                  ],
                  "start": 163,
                  "end": 172
                },
                "start": 156,
                "end": 173
              }
            ],
            "start": 112,
            "end": 175
          },
          "expression": false,
          "start": 98,
          "end": 175
        },
        "start": 81,
        "end": 175
      },
      "directive": null,
      "start": 81,
      "end": 176
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
