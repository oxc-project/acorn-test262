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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 200,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "name": "function1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 67,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 67,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 50,
                    "end": 61,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 54,
                        "end": 60,
                        "id": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 55,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
                    "declare": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 120,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 90,
              "name": "function2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 120,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 120,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 103,
                    "end": 114,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 107,
                        "end": 113,
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
                    "declare": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 198,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 142,
              "name": "function3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 198,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 198,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 155,
                    "end": 166,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 159,
                        "end": 165,
                        "id": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 160,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
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
                          "name": "function2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
