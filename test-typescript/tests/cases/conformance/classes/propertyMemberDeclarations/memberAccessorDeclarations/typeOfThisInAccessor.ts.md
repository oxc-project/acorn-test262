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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 74,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 74,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 32,
                    "end": 45,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 36,
                        "end": 44,
                        "id": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
            "start": 80,
            "end": 155,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 155,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 105,
                    "end": 119,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 109,
                        "end": 118,
                        "id": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 111,
                          "name": "r2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
      "start": 159,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 332,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 181,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 249,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 249,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 249,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 204,
                    "end": 217,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 208,
                        "end": 216,
                        "id": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 212,
                          "end": 216
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
            "start": 255,
            "end": 330,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 330,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 330,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 280,
                    "end": 294,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 284,
                        "end": 293,
                        "id": {
                          "type": "Identifier",
                          "start": 284,
                          "end": 286,
                          "name": "r2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 289,
                          "end": 293
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 353,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 353,
                  "end": 411,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 356,
                    "end": 411,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 366,
                        "end": 380,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 370,
                            "end": 379,
                            "id": {
                              "type": "Identifier",
                              "start": 370,
                              "end": 372,
                              "name": "r3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "ThisExpression",
                              "start": 375,
                              "end": 379
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
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
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
