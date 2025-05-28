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
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 100,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 98,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 97,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 28,
                  "end": 97,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 36,
                    "end": 97,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 46,
                        "end": 91,
                        "decorators": [],
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
                        "value": {
                          "type": "FunctionExpression",
                          "start": 56,
                          "end": 91,
                          "id": null,
                          "generator": true,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                          "expression": false
                        },
                        "kind": "method",
                        "computed": true,
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
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
