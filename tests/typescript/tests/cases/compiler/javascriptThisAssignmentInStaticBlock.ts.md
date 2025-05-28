__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 347,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 71,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 71,
        "body": [
          {
            "type": "StaticBlock",
            "start": 18,
            "end": 69,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 35,
                "end": 63,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 35,
                  "end": 62,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 35,
                    "end": 51,
                    "object": {
                      "type": "ThisExpression",
                      "start": 35,
                      "end": 39
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 51,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 54,
                    "end": 62,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 60,
                      "end": 62,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 93,
      "expression": {
        "type": "CallExpression",
        "start": 73,
        "end": 92,
        "callee": {
          "type": "MemberExpression",
          "start": 73,
          "end": 90,
          "object": {
            "type": "Identifier",
            "start": 73,
            "end": 78,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 90,
            "decorators": [],
            "name": "doSomething",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 302,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 126,
        "decorators": [],
        "name": "ElementsArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 135,
        "end": 140,
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 302,
        "body": [
          {
            "type": "StaticBlock",
            "start": 147,
            "end": 300,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 164,
                "end": 199,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 170,
                    "end": 198,
                    "id": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 182,
                      "decorators": [],
                      "name": "superisArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 185,
                      "end": 198,
                      "object": {
                        "type": "Super",
                        "start": 185,
                        "end": 190
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 198,
                        "decorators": [],
                        "name": "isArray",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "VariableDeclaration",
                "start": 208,
                "end": 256,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 214,
                    "end": 255,
                    "id": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 227,
                      "decorators": [],
                      "name": "customIsArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrowFunctionExpression",
                      "start": 230,
                      "end": 255,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 231,
                          "end": 234,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "start": 238,
                        "end": 255,
                        "callee": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 250,
                          "decorators": [],
                          "name": "superisArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 251,
                            "end": 254,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "id": null,
                      "generator": false
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 265,
                "end": 294,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 265,
                  "end": 293,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 265,
                    "end": 277,
                    "object": {
                      "type": "ThisExpression",
                      "start": 265,
                      "end": 269
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 277,
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 293,
                    "decorators": [],
                    "name": "customIsArray",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 347,
      "expression": {
        "type": "CallExpression",
        "start": 304,
        "end": 346,
        "callee": {
          "type": "MemberExpression",
          "start": 304,
          "end": 325,
          "object": {
            "type": "Identifier",
            "start": 304,
            "end": 317,
            "decorators": [],
            "name": "ElementsArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 318,
            "end": 325,
            "decorators": [],
            "name": "isArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 326,
            "end": 345,
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 343,
              "decorators": [],
              "name": "ElementsArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
