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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "_this",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 372,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 77,
                            "name": "doStuff",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 79,
                            "end": 185,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 80,
                                "end": 88,
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 93,
                              "end": 185,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 99,
                                "end": 185,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 117,
                                    "end": 131,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 121,
                                        "end": 130,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 121,
                                          "end": 126,
                                          "name": "_this",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
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
                                    "kind": "var",
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
                                        "name": "callback",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 164,
                                          "end": 169,
                                          "name": "_this",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 370,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 213,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 213,
              "end": 370,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 370,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 226,
                    "end": 240,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 230,
                        "end": 239,
                        "id": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 235,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 277,
                            "name": "doStuff",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 279,
                            "end": 354,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 280,
                                "end": 288,
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 293,
                              "end": 354,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                        "name": "callback",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 333,
                                          "end": 338,
                                          "name": "_this",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
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
