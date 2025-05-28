__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 413,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 157,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 74,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 74,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 32,
                    "end": 45,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 36,
                        "end": 44,
                        "id": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 59,
                    "end": 68,
                    "argument": {
                      "type": "Literal",
                      "start": 66,
                      "end": 67,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 155,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 155,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 105,
                    "end": 119,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 109,
                        "end": 118,
                        "id": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 111,
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 140,
                    "end": 149,
                    "argument": {
                      "type": "Literal",
                      "start": 147,
                      "end": 148,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 332,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 166,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 332,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 181,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 249,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 249,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 249,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 204,
                    "end": 217,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 208,
                        "end": 216,
                        "id": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 212,
                          "end": 216
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 234,
                    "end": 243,
                    "argument": {
                      "type": "Literal",
                      "start": 241,
                      "end": 242,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 255,
            "end": 330,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 330,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 330,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 280,
                    "end": 294,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 284,
                        "end": 293,
                        "id": {
                          "type": "Identifier",
                          "start": 284,
                          "end": 286,
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 289,
                          "end": 293
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 315,
                    "end": 324,
                    "argument": {
                      "type": "Literal",
                      "start": 322,
                      "end": 323,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 413,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 342,
            "end": 413,
            "properties": [
              {
                "type": "Property",
                "start": 348,
                "end": 411,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 353,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 353,
                  "end": 411,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 356,
                    "end": 411,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 366,
                        "end": 380,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 370,
                            "end": 379,
                            "id": {
                              "type": "Identifier",
                              "start": 370,
                              "end": 372,
                              "decorators": [],
                              "name": "r3",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ThisExpression",
                              "start": 375,
                              "end": 379
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 396,
                        "end": 405,
                        "argument": {
                          "type": "Literal",
                          "start": 403,
                          "end": 404,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
