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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 20
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
              "start": 25,
              "end": 36
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 39,
                "end": 45
              },
              "expression": false,
              "start": 36,
              "end": 45
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 45
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 51
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 67,
                      "end": 68
                    },
                    "start": 60,
                    "end": 69
                  }
                ],
                "start": 54,
                "end": 73
              },
              "expression": false,
              "start": 51,
              "end": 73
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 73
          }
        ],
        "start": 21,
        "end": 75
      },
      "abstract": false,
      "declare": false,
      "start": 13,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
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
              "start": 99,
              "end": 110
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 119,
                      "end": 126
                    },
                    "directive": null,
                    "start": 119,
                    "end": 127
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 132,
                        "end": 140
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 149,
                          "end": 150
                        },
                        "id": null,
                        "generator": false,
                        "start": 143,
                        "end": 150
                      },
                      "start": 132,
                      "end": 150
                    },
                    "directive": null,
                    "start": 132,
                    "end": 151
                  }
                ],
                "start": 113,
                "end": 155
              },
              "expression": false,
              "start": 110,
              "end": 155
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 99,
            "end": 155
          }
        ],
        "start": 95,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 77,
      "end": 157
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            },
            "typeArguments": null,
            "arguments": [],
            "start": 169,
            "end": 176
          },
          "definite": false,
          "start": 165,
          "end": 176
        }
      ],
      "declare": false,
      "start": 159,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 178,
          "end": 183
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 178,
        "end": 185
      },
      "directive": null,
      "start": 178,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 186
}
```
