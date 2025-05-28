__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 225,
  "end": 509,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 225,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 238,
        "end": 292,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 244,
            "end": 249,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 248,
              "end": 249,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 255,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 259,
              "end": 260,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 266,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 270,
              "end": 275,
              "left": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 281,
            "end": 290,
            "id": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 285,
              "end": 290,
              "left": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "start": 289,
                "end": 290,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 358,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 331,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 301,
                "end": 331,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 307,
                    "end": 329,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 308,
                        "end": 319,
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 311,
                          "end": 319,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 313,
                            "end": 319
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 320,
                      "end": 329,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 322,
                        "end": 329
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 334,
            "end": 357,
            "properties": [
              {
                "type": "Property",
                "start": 344,
                "end": 351,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 344,
                  "end": 345,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "Literal",
                  "start": 347,
                  "end": 351,
                  "value": true,
                  "raw": "true"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 372,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 365,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 368,
            "end": 371,
            "object": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 373,
      "end": 389,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 382,
            "end": 388,
            "object": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 384,
              "end": 387,
              "value": "A",
              "raw": "\"A\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 405,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 395,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 398,
            "end": 404,
            "object": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 400,
              "end": 403,
              "object": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 407,
      "end": 508,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 414,
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
        "start": 415,
        "end": 508,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 421,
            "end": 432,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 422,
              "end": 425,
              "object": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 426,
              "end": 432,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 429,
                "end": 432,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 437,
            "end": 477,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 442,
              "end": 445,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 443,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 446,
              "end": 477,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 449,
                "end": 477,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 459,
                    "end": 471,
                    "argument": {
                      "type": "Literal",
                      "start": 466,
                      "end": 470,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 482,
            "end": 506,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 487,
              "end": 490,
              "object": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 506,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 492,
                  "end": 501,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 495,
                      "end": 501
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 503,
                "end": 506,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
