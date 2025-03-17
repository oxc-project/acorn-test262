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
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "name": "Dragon",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 40,
          "end": 59,
          "name": "numberEaten",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 99,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 97,
            "expression": {
              "type": "AssignmentExpression",
              "start": 67,
              "end": 97,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 67,
                "end": 83,
                "object": {
                  "type": "ThisExpression",
                  "start": 67,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 83,
                  "name": "numberEaten",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 86,
                "end": 97,
                "name": "numberEaten",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 125,
        "name": "Firedrake",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 140,
        "name": "Dragon",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 185,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 158,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 185,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 171,
                    "end": 179,
                    "expression": {
                      "type": "CallExpression",
                      "start": 171,
                      "end": 178,
                      "callee": {
                        "type": "Super",
                        "start": 171,
                        "end": 176
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
    },
    {
      "type": "ClassDeclaration",
      "start": 194,
      "end": 455,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 209,
        "name": "Conestoga",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 218,
        "end": 223,
        "name": "Wagon",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 224,
        "end": 455,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 230,
            "end": 323,
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
              "end": 323,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "drunkOO",
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
                          "value": true,
                          "raw": "true"
                        }
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
                "start": 264,
                "end": 323,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 303,
                    "end": 317,
                    "expression": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 316,
                      "callee": {
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 309,
                          "end": 315,
                          "value": "nope",
                          "raw": "'nope'"
                        }
                      ],
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
          },
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 453,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "name": "circle",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 390,
              "end": 453,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 415,
                  "name": "others",
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
                          "name": "Wagon",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "object": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 440,
                        "name": "others",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 447,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 464,
            "end": 483,
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 477,
              "name": "Conestoga",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 478,
                "end": 482,
                "value": true,
                "raw": "true"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 494,
      "expression": {
        "type": "MemberExpression",
        "start": 485,
        "end": 494,
        "object": {
          "type": "Identifier",
          "start": 485,
          "end": 486,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 487,
          "end": 494,
          "name": "drunkOO",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 507,
      "expression": {
        "type": "MemberExpression",
        "start": 495,
        "end": 507,
        "object": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 497,
          "end": 507,
          "name": "numberOxen",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
