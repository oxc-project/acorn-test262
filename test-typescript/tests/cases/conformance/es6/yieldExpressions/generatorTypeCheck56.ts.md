__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 100,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 97,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 28,
                  "end": 97,
                  "id": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 36,
                    "end": 97,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 46,
                        "end": 91,
                        "static": false,
                        "computed": true,
                        "key": {
                          "type": "YieldExpression",
                          "start": 48,
                          "end": 55,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 54,
                            "end": 55,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 56,
                          "end": 91,
                          "id": null,
                          "expression": false,
                          "generator": true,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 59,
                            "end": 91,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 73,
                                "end": 81,
                                "expression": {
                                  "type": "YieldExpression",
                                  "start": 73,
                                  "end": 80,
                                  "delegate": false,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 79,
                                    "end": 80,
                                    "value": 0,
                                    "raw": "0"
                                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
