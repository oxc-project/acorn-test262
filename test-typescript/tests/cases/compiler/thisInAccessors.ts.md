__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 504,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 47,
        "name": "GetterOnly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 63,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 121,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 121,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 76,
                    "end": 96,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 80,
                        "end": 95,
                        "id": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 82,
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 85,
                          "end": 95,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ThisExpression",
                            "start": 91,
                            "end": 95
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 105,
                    "end": 115,
                    "argument": {
                      "type": "Literal",
                      "start": 112,
                      "end": 114,
                      "value": "",
                      "raw": "''"
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
            "start": 126,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 135,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 136,
                  "end": 139,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 148,
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
      "type": "ClassDeclaration",
      "start": 183,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 199,
        "name": "SetterOnly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 200,
        "end": 302,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 244,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 215,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 244,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 228,
                    "end": 238,
                    "argument": {
                      "type": "Literal",
                      "start": 235,
                      "end": 237,
                      "value": "",
                      "raw": "''"
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
            "start": 249,
            "end": 300,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 258,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 300,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 262,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 300,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 274,
                    "end": 294,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 278,
                        "end": 293,
                        "id": {
                          "type": "Identifier",
                          "start": 278,
                          "end": 280,
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 283,
                          "end": 293,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ThisExpression",
                            "start": 289,
                            "end": 293
                          },
                          "typeParameters": null,
                          "returnType": null
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
      "start": 351,
      "end": 504,
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 372,
        "name": "GetterAndSetter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 373,
        "end": 504,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 379,
            "end": 446,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 388,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 446,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 446,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 401,
                    "end": 421,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 405,
                        "end": 420,
                        "id": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 407,
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 410,
                          "end": 420,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ThisExpression",
                            "start": 416,
                            "end": 420
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 430,
                    "end": 440,
                    "argument": {
                      "type": "Literal",
                      "start": 437,
                      "end": 439,
                      "value": "",
                      "raw": "''"
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
            "start": 451,
            "end": 502,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 460,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 460,
              "end": 502,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 461,
                  "end": 464,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 466,
                "end": 502,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 476,
                    "end": 496,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 480,
                        "end": 495,
                        "id": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 482,
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 485,
                          "end": 495,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ThisExpression",
                            "start": 491,
                            "end": 495
                          },
                          "typeParameters": null,
                          "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
