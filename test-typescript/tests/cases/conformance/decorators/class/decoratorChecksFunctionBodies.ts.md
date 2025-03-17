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
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 37,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 48,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 44,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 40,
          "end": 44
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 158,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 158,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 150,
                "end": 158,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 64,
                "end": 141,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 66,
                  "end": 140,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 79,
                    "end": 140,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 89,
                        "end": 99,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 93,
                            "end": 98,
                            "id": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "kind": "var",
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
                            "name": "func",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 113,
                              "end": 114,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
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
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
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
