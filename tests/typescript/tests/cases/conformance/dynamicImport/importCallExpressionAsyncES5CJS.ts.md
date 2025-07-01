__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 24
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 42
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./test",
                        "raw": "'./test'",
                        "start": 58,
                        "end": 66
                      },
                      "options": null,
                      "phase": null,
                      "start": 51,
                      "end": 67
                    },
                    "start": 45,
                    "end": 67
                  },
                  "definite": false,
                  "start": 39,
                  "end": 67
                }
              ],
              "declare": false,
              "start": 33,
              "end": 67
            }
          ],
          "start": 27,
          "end": 76
        },
        "expression": false,
        "start": 7,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cl1",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 94
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 137
                          },
                          "init": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "ImportExpression",
                              "source": {
                                "type": "Literal",
                                "value": "./test",
                                "raw": "'./test'",
                                "start": 153,
                                "end": 161
                              },
                              "options": null,
                              "phase": null,
                              "start": 146,
                              "end": 162
                            },
                            "start": 140,
                            "end": 162
                          },
                          "definite": false,
                          "start": 134,
                          "end": 162
                        }
                      ],
                      "declare": false,
                      "start": 128,
                      "end": 162
                    }
                  ],
                  "start": 118,
                  "end": 175
                },
                "expression": false,
                "start": 115,
                "end": 175
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 101,
              "end": 175
            }
          ],
          "start": 95,
          "end": 177
        },
        "abstract": false,
        "declare": false,
        "start": 85,
        "end": 177
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 78,
      "end": 177
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 195
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": true,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 235,
                                "end": 238
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "ImportExpression",
                                  "source": {
                                    "type": "Literal",
                                    "value": "./test",
                                    "raw": "'./test'",
                                    "start": 254,
                                    "end": 262
                                  },
                                  "options": null,
                                  "phase": null,
                                  "start": 247,
                                  "end": 263
                                },
                                "start": 241,
                                "end": 263
                              },
                              "definite": false,
                              "start": 235,
                              "end": 263
                            }
                          ],
                          "declare": false,
                          "start": 229,
                          "end": 263
                        }
                      ],
                      "start": 219,
                      "end": 278
                    },
                    "id": null,
                    "generator": false,
                    "start": 207,
                    "end": 278
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 204,
                  "end": 278
                }
              ],
              "start": 198,
              "end": 280
            },
            "definite": false,
            "start": 192,
            "end": 280
          }
        ],
        "declare": false,
        "start": 186,
        "end": 280
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 179,
      "end": 280
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cl2",
          "optional": false,
          "typeAnnotation": null,
          "start": 295,
          "end": 298
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "req",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 361,
                                  "end": 364
                                },
                                "init": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./test",
                                      "raw": "'./test'",
                                      "start": 380,
                                      "end": 388
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 373,
                                    "end": 389
                                  },
                                  "start": 367,
                                  "end": 389
                                },
                                "definite": false,
                                "start": 361,
                                "end": 389
                              }
                            ],
                            "declare": false,
                            "start": 355,
                            "end": 389
                          }
                        ],
                        "start": 341,
                        "end": 407
                      },
                      "id": null,
                      "generator": false,
                      "start": 329,
                      "end": 407
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 326,
                    "end": 407
                  }
                ],
                "start": 316,
                "end": 413
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 305,
              "end": 413
            }
          ],
          "start": 299,
          "end": 415
        },
        "abstract": false,
        "declare": false,
        "start": 289,
        "end": 415
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 282,
      "end": 415
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 431
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "req",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 458,
                          "end": 461
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "ImportExpression",
                            "source": {
                              "type": "Literal",
                              "value": "./test",
                              "raw": "'./test'",
                              "start": 477,
                              "end": 485
                            },
                            "options": null,
                            "phase": null,
                            "start": 470,
                            "end": 486
                          },
                          "start": 464,
                          "end": 486
                        },
                        "definite": false,
                        "start": 458,
                        "end": 486
                      }
                    ],
                    "declare": false,
                    "start": 452,
                    "end": 486
                  }
                ],
                "start": 446,
                "end": 496
              },
              "id": null,
              "generator": false,
              "start": 434,
              "end": 496
            },
            "definite": false,
            "start": 430,
            "end": 496
          }
        ],
        "declare": false,
        "start": 424,
        "end": 496
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 417,
      "end": 496
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 496
}
```
