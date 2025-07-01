__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetSetEnumerableClassGet",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 30
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 57,
                      "end": 61
                    },
                    "start": 50,
                    "end": 62
                  }
                ],
                "start": 48,
                "end": 63
              },
              "expression": false,
              "start": 45,
              "end": 63
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 37,
            "end": 63
          }
        ],
        "start": 31,
        "end": 65
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetSetEnumerableClassSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 97
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 112
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 120,
                      "end": 127
                    },
                    "start": 118,
                    "end": 127
                  },
                  "start": 113,
                  "end": 127
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 129,
                "end": 132
              },
              "expression": false,
              "start": 112,
              "end": 132
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 104,
            "end": 132
          }
        ],
        "start": 98,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 134
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetSetEnumerableClassGetSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 169
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 184
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 196,
                      "end": 200
                    },
                    "start": 189,
                    "end": 201
                  }
                ],
                "start": 187,
                "end": 202
              },
              "expression": false,
              "start": 184,
              "end": 202
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 176,
            "end": 202
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 215
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 223,
                      "end": 230
                    },
                    "start": 221,
                    "end": 230
                  },
                  "start": 216,
                  "end": 230
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 232,
                "end": 235
              },
              "expression": false,
              "start": 215,
              "end": 235
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 207,
            "end": 235
          }
        ],
        "start": 170,
        "end": 237
      },
      "abstract": false,
      "declare": false,
      "start": 136,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "GetSetEnumerableObjectGet",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 270
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 287
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 299,
                          "end": 303
                        },
                        "start": 292,
                        "end": 304
                      }
                    ],
                    "start": 290,
                    "end": 306
                  },
                  "expression": false,
                  "start": 287,
                  "end": 306
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 279,
                "end": 306
              }
            ],
            "start": 273,
            "end": 308
          },
          "definite": false,
          "start": 245,
          "end": 308
        }
      ],
      "declare": false,
      "start": 239,
      "end": 309
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "GetSetEnumerableObjectSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 342
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 359
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 367,
                          "end": 374
                        },
                        "start": 365,
                        "end": 374
                      },
                      "start": 360,
                      "end": 374
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 376,
                    "end": 379
                  },
                  "expression": false,
                  "start": 359,
                  "end": 379
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 351,
                "end": 379
              }
            ],
            "start": 345,
            "end": 381
          },
          "definite": false,
          "start": 317,
          "end": 381
        }
      ],
      "declare": false,
      "start": 311,
      "end": 382
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "GetSetEnumerableObjectGetSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 418
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 435
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 447,
                          "end": 451
                        },
                        "start": 440,
                        "end": 452
                      }
                    ],
                    "start": 438,
                    "end": 454
                  },
                  "expression": false,
                  "start": 435,
                  "end": 454
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 427,
                "end": 454
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 468
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 476,
                          "end": 483
                        },
                        "start": 474,
                        "end": 483
                      },
                      "start": 469,
                      "end": 483
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 485,
                    "end": 488
                  },
                  "expression": false,
                  "start": 468,
                  "end": 488
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 488
              }
            ],
            "start": 421,
            "end": 490
          },
          "definite": false,
          "start": 390,
          "end": 490
        }
      ],
      "declare": false,
      "start": 384,
      "end": 491
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 491
}
```
