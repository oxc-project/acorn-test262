__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 496,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 76,
        "async": true,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 42,
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 45,
                    "end": 67,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 51,
                      "end": 67,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 58,
                        "end": 66,
                        "raw": "'./test'",
                        "value": "./test"
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 24,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 177,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 85,
        "end": 177,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 95,
          "end": 177,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 175,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 175,
                "async": true,
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
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 137,
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "AwaitExpression",
                            "start": 140,
                            "end": 162,
                            "argument": {
                              "type": "ImportExpression",
                              "start": 146,
                              "end": 162,
                              "options": null,
                              "source": {
                                "type": "Literal",
                                "start": 153,
                                "end": 161,
                                "raw": "'./test'",
                                "value": "./test"
                              }
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
          "decorators": [],
          "name": "cl1",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 179,
      "end": 280,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 186,
        "end": 280,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 192,
            "end": 280,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 207,
                    "end": 278,
                    "async": true,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 235,
                                "end": 238,
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "start": 241,
                                "end": 263,
                                "argument": {
                                  "type": "ImportExpression",
                                  "start": 247,
                                  "end": 263,
                                  "options": null,
                                  "source": {
                                    "type": "Literal",
                                    "start": 254,
                                    "end": 262,
                                    "raw": "'./test'",
                                    "value": "./test"
                                  }
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const"
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 282,
      "end": 415,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 289,
        "end": 415,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 299,
          "end": 415,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 305,
              "end": 413,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "start": 316,
                "end": 413,
                "properties": [
                  {
                    "type": "Property",
                    "start": 326,
                    "end": 407,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 329,
                      "end": 407,
                      "async": true,
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
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 364,
                                  "decorators": [],
                                  "name": "req",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "AwaitExpression",
                                  "start": 367,
                                  "end": 389,
                                  "argument": {
                                    "type": "ImportExpression",
                                    "start": 373,
                                    "end": 389,
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "start": 380,
                                      "end": 388,
                                      "raw": "'./test'",
                                      "value": "./test"
                                    }
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 295,
          "end": 298,
          "decorators": [],
          "name": "cl2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 417,
      "end": 496,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 424,
        "end": 496,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 430,
            "end": 496,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 434,
              "end": 496,
              "async": true,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 461,
                          "decorators": [],
                          "name": "req",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "start": 464,
                          "end": 486,
                          "argument": {
                            "type": "ImportExpression",
                            "start": 470,
                            "end": 486,
                            "options": null,
                            "source": {
                              "type": "Literal",
                              "start": 477,
                              "end": 485,
                              "raw": "'./test'",
                              "value": "./test"
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
