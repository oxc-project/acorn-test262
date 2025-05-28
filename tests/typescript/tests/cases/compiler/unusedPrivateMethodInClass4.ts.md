__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 200,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 200,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "decorators": [],
              "name": "function1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 67,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 67,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 50,
                    "end": 61,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 54,
                        "end": 60,
                        "id": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 55,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 58,
                          "end": 60,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 120,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 90,
              "decorators": [],
              "name": "function2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 120,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 120,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 103,
                    "end": 114,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 107,
                        "end": 113,
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 111,
                          "end": 113,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 198,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 142,
              "decorators": [],
              "name": "function3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 198,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 198,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 155,
                    "end": 166,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 159,
                        "end": 165,
                        "id": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 160,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 163,
                          "end": 165,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 192,
                    "expression": {
                      "type": "CallExpression",
                      "start": 175,
                      "end": 191,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 175,
                        "end": 189,
                        "object": {
                          "type": "ThisExpression",
                          "start": 175,
                          "end": 179
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 189,
                          "decorators": [],
                          "name": "function2",
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
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
