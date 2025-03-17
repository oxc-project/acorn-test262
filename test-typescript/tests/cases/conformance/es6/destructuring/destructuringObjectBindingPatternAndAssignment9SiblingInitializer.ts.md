__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 653,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "name": "f1",
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
        "start": 44,
        "end": 129,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 50,
            "end": 84,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 83,
                "id": {
                  "type": "ObjectPattern",
                  "start": 56,
                  "end": 71,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 58,
                      "end": 60,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 60,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 60,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 62,
                      "end": 69,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 64,
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 62,
                        "end": 69,
                        "left": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 64,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 69,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 74,
                  "end": 83,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 76,
                      "end": 81,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 78,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 80,
                        "end": 81,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 127,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 126,
                "id": {
                  "type": "ObjectPattern",
                  "start": 95,
                  "end": 114,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 97,
                      "end": 99,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 99,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 99,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 101,
                      "end": 112,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 103,
                        "name": "b2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 101,
                        "end": 112,
                        "left": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 103,
                          "name": "b2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 106,
                          "end": 112,
                          "left": {
                            "type": "Literal",
                            "start": 106,
                            "end": 107,
                            "value": 1,
                            "raw": "1"
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 110,
                            "end": 112,
                            "name": "a2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 117,
                  "end": 126,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 119,
                      "end": 124,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 121,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 123,
                        "end": 124,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 172,
        "name": "f2",
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
        "start": 175,
        "end": 268,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 181,
            "end": 218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 187,
                "end": 217,
                "id": {
                  "type": "ObjectPattern",
                  "start": 187,
                  "end": 202,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 189,
                      "end": 191,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 191,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 191,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 193,
                      "end": 200,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 195,
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 193,
                        "end": 200,
                        "left": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 195,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 200,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 205,
                  "end": 217,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 207,
                      "end": 215,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 209,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 211,
                        "end": 215,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 223,
            "end": 266,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 229,
                "end": 265,
                "id": {
                  "type": "ObjectPattern",
                  "start": 229,
                  "end": 250,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 231,
                      "end": 233,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 233,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 233,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 235,
                      "end": 248,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 237,
                        "name": "b2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 235,
                        "end": 248,
                        "left": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 237,
                          "name": "b2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 240,
                          "end": 248,
                          "left": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 242,
                            "name": "a2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 245,
                            "end": 248,
                            "value": "!",
                            "raw": "'!'"
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 253,
                  "end": 265,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 255,
                      "end": 263,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 257,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 259,
                        "end": 263,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "name": "f3",
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
        "start": 323,
        "end": 430,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 329,
            "end": 373,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 335,
                "end": 372,
                "id": {
                  "type": "ObjectPattern",
                  "start": 335,
                  "end": 350,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 337,
                      "end": 339,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 339,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 339,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 341,
                      "end": 348,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 343,
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 341,
                        "end": 348,
                        "left": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 343,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 348,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 353,
                  "end": 372,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 355,
                      "end": 363,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 357,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 359,
                        "end": 363,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 365,
                      "end": 370,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 367,
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 369,
                        "end": 370,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 378,
            "end": 428,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 427,
                "id": {
                  "type": "ObjectPattern",
                  "start": 384,
                  "end": 405,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 386,
                      "end": 388,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 388,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 388,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 390,
                      "end": 403,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 390,
                        "end": 392,
                        "name": "b2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 390,
                        "end": 403,
                        "left": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 392,
                          "name": "b2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 395,
                          "end": 403,
                          "left": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 397,
                            "name": "a2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 400,
                            "end": 403,
                            "value": "!",
                            "raw": "'!'"
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 408,
                  "end": 427,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 410,
                      "end": 418,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 412,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 414,
                        "end": 418,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 420,
                      "end": 425,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 422,
                        "name": "b2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 424,
                        "end": 425,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 596,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 596,
            "name": "yadda",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 556,
              "end": 596,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 558,
                "end": 596,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 558,
                    "end": 584,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 560,
                        "end": 571,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 560,
                          "end": 561,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 562,
                          "end": 570,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 564,
                            "end": 570
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 572,
                        "end": 582,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 573,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 574,
                          "end": 582,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 576,
                            "end": 582
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 587,
                    "end": 596
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 597,
      "end": 652,
      "id": {
        "type": "Identifier",
        "start": 606,
        "end": 608,
        "name": "f4",
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
        "start": 611,
        "end": 652,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 617,
            "end": 650,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 623,
                "end": 649,
                "id": {
                  "type": "ObjectPattern",
                  "start": 623,
                  "end": 635,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 625,
                      "end": 626,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 626,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 626,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 628,
                      "end": 633,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 628,
                        "end": 629,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 628,
                        "end": 633,
                        "left": {
                          "type": "Identifier",
                          "start": 628,
                          "end": 629,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 632,
                          "end": 633,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 638,
                  "end": 649,
                  "left": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 643,
                    "name": "yadda",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "??",
                  "right": {
                    "type": "ObjectExpression",
                    "start": 647,
                    "end": 649,
                    "properties": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
