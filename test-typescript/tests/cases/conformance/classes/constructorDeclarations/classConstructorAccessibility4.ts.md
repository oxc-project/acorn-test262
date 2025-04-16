__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 412,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 204,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 39,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 39,
                "body": []
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
            "start": 45,
            "end": 202,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 202,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 202,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 64,
                    "end": 151,
                    "id": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 72,
                      "end": 151,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 86,
                          "end": 141,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 92,
                            "name": "method",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 92,
                            "end": 141,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 95,
                              "end": 141,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 113,
                                  "end": 121,
                                  "expression": {
                                    "type": "NewExpression",
                                    "start": 113,
                                    "end": 120,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 117,
                                      "end": 118,
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
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
                  {
                    "type": "ClassDeclaration",
                    "start": 161,
                    "end": 196,
                    "id": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "ClassBody",
                      "start": 179,
                      "end": 196,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
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
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 213,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 412,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 247,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 241,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 247,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 247,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 253,
            "end": 410,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 259,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 410,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 262,
                "end": 410,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 272,
                    "end": 359,
                    "id": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 280,
                      "end": 359,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 294,
                          "end": 349,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 300,
                            "name": "method",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 300,
                            "end": 349,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 303,
                              "end": 349,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 321,
                                  "end": 329,
                                  "expression": {
                                    "type": "NewExpression",
                                    "start": 321,
                                    "end": 328,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 325,
                                      "end": 326,
                                      "name": "D",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
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
                  {
                    "type": "ClassDeclaration",
                    "start": 369,
                    "end": 404,
                    "id": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "name": "F",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "ClassBody",
                      "start": 387,
                      "end": 404,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
