__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 497,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 76,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 76,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 24,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 76,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 67,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 39,
                  "end": 67,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 42,
                    "name": "req",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 45,
                    "end": 67,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 51,
                      "end": 67,
                      "source": {
                        "type": "Literal",
                        "start": 58,
                        "end": 66,
                        "value": "./test",
                        "raw": "'./test'"
                      },
                      "options": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 177,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 85,
        "end": 177,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
          "name": "cl1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 95,
          "end": 177,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 175,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 175,
                "id": null,
                "expression": false,
                "generator": false,
                "async": true,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 118,
                  "end": 175,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 128,
                      "end": 162,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 134,
                          "end": 162,
                          "id": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 137,
                            "name": "req",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "AwaitExpression",
                            "start": 140,
                            "end": 162,
                            "argument": {
                              "type": "ImportExpression",
                              "start": 146,
                              "end": 162,
                              "source": {
                                "type": "Literal",
                                "start": 153,
                                "end": 161,
                                "value": "./test",
                                "raw": "'./test'"
                              },
                              "options": null
                            }
                          },
                          "definite": false
                        }
                      ],
                      "kind": "const",
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 179,
      "end": 280,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 186,
        "end": 280,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 192,
            "end": 280,
            "id": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 198,
              "end": 280,
              "properties": [
                {
                  "type": "Property",
                  "start": 204,
                  "end": 278,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 207,
                    "end": 278,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 219,
                      "end": 278,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 229,
                          "end": 263,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 235,
                              "end": 263,
                              "id": {
                                "type": "Identifier",
                                "start": 235,
                                "end": 238,
                                "name": "req",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "start": 241,
                                "end": 263,
                                "argument": {
                                  "type": "ImportExpression",
                                  "start": 247,
                                  "end": 263,
                                  "source": {
                                    "type": "Literal",
                                    "start": 254,
                                    "end": 262,
                                    "value": "./test",
                                    "raw": "'./test'"
                                  },
                                  "options": null
                                }
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 282,
      "end": 415,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 289,
        "end": 415,
        "id": {
          "type": "Identifier",
          "start": 295,
          "end": 298,
          "name": "cl2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 299,
          "end": 415,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 305,
              "end": 413,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectExpression",
                "start": 316,
                "end": 413,
                "properties": [
                  {
                    "type": "Property",
                    "start": 326,
                    "end": 407,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 329,
                      "end": 407,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": true,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 341,
                        "end": 407,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 355,
                            "end": 389,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 361,
                                "end": 389,
                                "id": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 364,
                                  "name": "req",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "AwaitExpression",
                                  "start": 367,
                                  "end": 389,
                                  "argument": {
                                    "type": "ImportExpression",
                                    "start": 373,
                                    "end": 389,
                                    "source": {
                                      "type": "Literal",
                                      "start": 380,
                                      "end": 388,
                                      "value": "./test",
                                      "raw": "'./test'"
                                    },
                                    "options": null
                                  }
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 417,
      "end": 496,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 424,
        "end": 496,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 430,
            "end": 496,
            "id": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 434,
              "end": 496,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 446,
                "end": 496,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 452,
                    "end": 486,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 458,
                        "end": 486,
                        "id": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 461,
                          "name": "req",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "start": 464,
                          "end": 486,
                          "argument": {
                            "type": "ImportExpression",
                            "start": 470,
                            "end": 486,
                            "source": {
                              "type": "Literal",
                              "start": 477,
                              "end": 485,
                              "value": "./test",
                              "raw": "'./test'"
                            },
                            "options": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
