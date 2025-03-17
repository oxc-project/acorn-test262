__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 457,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 23,
              "value": 43,
              "raw": "43"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 40,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 40,
              "end": 60,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 44,
                      "end": 50
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 60,
                "body": []
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
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 86,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 82,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 78,
          "end": 82
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 329,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 327,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 186,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 327,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 187,
                  "end": 203,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 203,
                    "name": "q",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 197,
                        "end": 203
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 327,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 225,
                    "expression": {
                      "type": "CallExpression",
                      "start": 215,
                      "end": 224,
                      "callee": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 221,
                          "end": 223,
                          "value": "",
                          "raw": "''"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 282,
                    "end": 300,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 286,
                        "end": 299,
                        "id": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 290,
                          "end": 299,
                          "callee": {
                            "type": "Super",
                            "start": 290,
                            "end": 295
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 296,
                              "end": 298,
                              "value": "",
                              "raw": "''"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 309,
                    "end": 321,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 313,
                        "end": 320,
                        "id": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 317,
                          "end": 320,
                          "callee": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 318,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
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
      "start": 331,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 346,
        "name": "OtherBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 347,
        "end": 351,
        "body": []
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
      "start": 353,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 371,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 380,
        "end": 389,
        "name": "OtherBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 390,
        "end": 456,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 396,
            "end": 454,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 396,
              "end": 407,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 407,
              "end": 454,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 454,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 420,
                    "end": 431,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 424,
                        "end": 430,
                        "id": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 425,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 428,
                          "end": 430,
                          "value": "",
                          "raw": "''"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 440,
                    "end": 448,
                    "expression": {
                      "type": "CallExpression",
                      "start": 440,
                      "end": 447,
                      "callee": {
                        "type": "Super",
                        "start": 440,
                        "end": 445
                      },
                      "arguments": [],
                      "optional": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
