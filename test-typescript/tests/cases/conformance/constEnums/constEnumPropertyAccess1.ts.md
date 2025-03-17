__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 249,
  "end": 534,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 249,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 268,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "value": 1,
            "raw": "1"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 279,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 283,
            "end": 284,
            "value": 2,
            "raw": "2"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 290,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 294,
            "end": 299,
            "left": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 305,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 309,
            "end": 314,
            "left": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "start": 313,
              "end": 314,
              "value": 2,
              "raw": "2"
            }
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 262,
        "end": 316,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 268,
            "end": 273,
            "id": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 272,
              "end": 273,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 279,
            "end": 284,
            "id": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 283,
              "end": 284,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 290,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 294,
              "end": 299,
              "left": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 305,
            "end": 314,
            "id": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 309,
              "end": 314,
              "left": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 355,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 325,
                "end": 355,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 331,
                    "end": 353,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 332,
                        "end": 343,
                        "name": "idx",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 335,
                          "end": 343,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 337,
                            "end": 343
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 344,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 346,
                        "end": 353
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 358,
            "end": 381,
            "properties": [
              {
                "type": "Property",
                "start": 368,
                "end": 375,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 368,
                  "end": 369,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "Literal",
                  "start": 371,
                  "end": 375,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 384,
      "end": 396,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 395,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 392,
            "end": 395,
            "object": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "name": "G",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 406,
            "end": 412,
            "object": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "name": "G",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 408,
              "end": 411,
              "value": "A",
              "raw": "\"A\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 422,
            "end": 428,
            "object": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 424,
              "end": 427,
              "object": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "name": "G",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 431,
      "end": 532,
      "id": {
        "type": "Identifier",
        "start": 437,
        "end": 438,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 439,
        "end": 532,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 445,
            "end": 456,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 446,
              "end": 449,
              "object": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "name": "G",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 450,
              "end": 456,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 456,
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
          },
          {
            "type": "MethodDefinition",
            "start": 461,
            "end": 501,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 466,
              "end": 469,
              "object": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
                "name": "G",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 470,
              "end": 501,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 473,
                "end": 501,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 483,
                    "end": 495,
                    "argument": {
                      "type": "Literal",
                      "start": 490,
                      "end": 494,
                      "value": true,
                      "raw": "true"
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
            "start": 506,
            "end": 530,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 511,
              "end": 514,
              "object": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "name": "G",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 530,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 516,
                  "end": 525,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 525,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 519,
                      "end": 525
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 527,
                "end": 530,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
