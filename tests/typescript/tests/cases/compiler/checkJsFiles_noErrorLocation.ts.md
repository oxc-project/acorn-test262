__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 75,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 45,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 45,
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
                "end": 45,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 73,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 73,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 73,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 69,
                    "argument": {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
                      "value": 4,
                      "raw": "4"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 157,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 155,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 127,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 126,
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 132,
                    "end": 151,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 132,
                      "end": 150,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 132,
                        "end": 140,
                        "object": {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 143,
                        "end": 150,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "start": 149,
                          "end": 150,
                          "value": 3,
                          "raw": "3"
                        },
                        "id": null,
                        "generator": false
                      }
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
      "type": "VariableDeclaration",
      "start": 159,
      "end": 177,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 169,
            "end": 176,
            "callee": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "B",
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
      "start": 178,
      "end": 186,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 185,
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 183,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "foo",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
