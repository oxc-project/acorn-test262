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
      "abstract": false,
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
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 35,
                  "end": 62,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 35,
                    "end": 51,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 35,
                      "end": 39
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 51,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 54,
                    "end": 62,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 60,
                      "end": 62,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 93,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 73,
        "end": 92,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 73,
          "end": 90,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 73,
            "end": 78,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 90,
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 302,
      "abstract": false,
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 170,
                    "end": 198,
                    "definite": false,
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
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 185,
                        "end": 190
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 198,
                        "decorators": [],
                        "name": "isArray",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "VariableDeclaration",
                "start": 208,
                "end": 256,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 214,
                    "end": 255,
                    "definite": false,
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
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 238,
                        "end": 255,
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
                        "callee": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 250,
                          "decorators": [],
                          "name": "superisArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
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
                      "typeParameters": null
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              {
                "type": "ExpressionStatement",
                "start": 265,
                "end": 294,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 265,
                  "end": 293,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 265,
                    "end": 277,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 265,
                      "end": 269
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 277,
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                }
              }
            ]
          }
        ]
      },
      "declare": false,
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
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 347,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 304,
        "end": 346,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 326,
            "end": 345,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 343,
              "decorators": [],
              "name": "ElementsArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 304,
          "end": 325,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 304,
            "end": 317,
            "decorators": [],
            "name": "ElementsArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 318,
            "end": 325,
            "decorators": [],
            "name": "isArray",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
