__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 372,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "_this",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 13,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 372,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 372,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 201,
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
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 195,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 56,
                      "end": 195,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 70,
                          "end": 185,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 77,
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 79,
                            "end": 185,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 80,
                                "end": 88,
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 93,
                              "end": 185,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 99,
                                "end": 185,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 117,
                                    "end": 131,
                                    "kind": "var",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 121,
                                        "end": 130,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 121,
                                          "end": 126,
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "start": 129,
                                          "end": 130,
                                          "value": 2,
                                          "raw": "2"
                                        },
                                        "definite": false
                                      }
                                    ],
                                    "declare": false
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 148,
                                    "end": 171,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 155,
                                      "end": 170,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 155,
                                        "end": 163,
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 164,
                                          "end": 169,
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            },
                            "id": null,
                            "generator": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 370,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 213,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 213,
              "end": 370,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 370,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 226,
                    "end": 240,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 230,
                        "end": 239,
                        "id": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 235,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 238,
                          "end": 239,
                          "value": 2,
                          "raw": "2"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 249,
                    "end": 364,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 256,
                      "end": 364,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 270,
                          "end": 354,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 277,
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 279,
                            "end": 354,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 280,
                                "end": 288,
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 293,
                              "end": 354,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 299,
                                "end": 354,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 317,
                                    "end": 340,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 324,
                                      "end": 339,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 324,
                                        "end": 332,
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 333,
                                          "end": 338,
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            },
                            "id": null,
                            "generator": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
