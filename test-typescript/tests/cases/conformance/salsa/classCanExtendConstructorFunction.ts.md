__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 508,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 99,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 99,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 97,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 67,
              "end": 97,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 67,
                "end": 83,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 67,
                  "end": 71
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 83,
                  "decorators": [],
                  "name": "numberEaten",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 86,
                "end": 97,
                "decorators": [],
                "name": "numberEaten",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 40,
          "end": 59,
          "decorators": [],
          "name": "numberEaten",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 187,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 185,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 158,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 185,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 185,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 171,
                    "end": 179,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 171,
                      "end": 178,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 171,
                        "end": 176
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
        "start": 116,
        "end": 125,
        "decorators": [],
        "name": "Firedrake",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 140,
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 194,
      "end": 455,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 224,
        "end": 455,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 230,
            "end": 323,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 241,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 323,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 323,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 303,
                    "end": 317,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 316,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 309,
                          "end": 315,
                          "raw": "'nope'",
                          "value": "nope"
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 242,
                  "end": 262,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 262,
                    "decorators": [],
                    "name": "drunkOO",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 262,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 258,
                        "end": 262,
                        "literal": {
                          "type": "Literal",
                          "start": 258,
                          "end": 262,
                          "raw": "true",
                          "value": true
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 453,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "decorators": [],
              "name": "circle",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 390,
              "end": 453,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 417,
                "end": 453,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 427,
                    "end": 447,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 434,
                      "end": 447,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 440,
                        "decorators": [],
                        "name": "others",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 447,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 415,
                  "decorators": [],
                  "name": "others",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 397,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 399,
                      "end": 415,
                      "elementType": {
                        "type": "TSTypeQuery",
                        "start": 400,
                        "end": 412,
                        "exprName": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 412,
                          "decorators": [],
                          "name": "Wagon",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
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
        "start": 200,
        "end": 209,
        "decorators": [],
        "name": "Conestoga",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 218,
        "end": 223,
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 483,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 464,
            "end": 483,
            "arguments": [
              {
                "type": "Literal",
                "start": 478,
                "end": 482,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 477,
              "decorators": [],
              "name": "Conestoga",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 494,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 485,
        "end": 494,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 485,
          "end": 486,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 487,
          "end": 494,
          "decorators": [],
          "name": "drunkOO",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 507,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 495,
        "end": 507,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 497,
          "end": 507,
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
