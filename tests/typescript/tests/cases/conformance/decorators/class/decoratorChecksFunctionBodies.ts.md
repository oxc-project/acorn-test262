__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 160,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 27,
        "decorators": [],
        "name": "func",
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
          "start": 28,
          "end": 37,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 44,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 40,
          "end": 44
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 160,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
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
        "start": 58,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 158,
            "decorators": [
              {
                "type": "Decorator",
                "start": 64,
                "end": 141,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 66,
                  "end": 140,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 79,
                    "end": 140,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 89,
                        "end": 99,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 93,
                            "end": 98,
                            "id": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 97,
                              "end": 98,
                              "value": 3,
                              "raw": "3"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 108,
                        "end": 116,
                        "expression": {
                          "type": "CallExpression",
                          "start": 108,
                          "end": 115,
                          "callee": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 112,
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 113,
                              "end": 114,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 125,
                        "end": 134,
                        "argument": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 158,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 158,
                "body": []
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
