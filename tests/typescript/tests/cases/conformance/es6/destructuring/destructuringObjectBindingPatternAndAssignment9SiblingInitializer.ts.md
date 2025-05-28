__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 652,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 129,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 50,
            "end": 84,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 83,
                "id": {
                  "type": "ObjectPattern",
                  "start": 56,
                  "end": 71,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 58,
                      "end": 60,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 60,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 60,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 62,
                      "end": 69,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 64,
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 62,
                        "end": 69,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 64,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 69,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 78,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 80,
                        "end": 81,
                        "value": 1,
                        "raw": "1"
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
            "start": 89,
            "end": 127,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 126,
                "id": {
                  "type": "ObjectPattern",
                  "start": 95,
                  "end": 114,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 97,
                      "end": 99,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 99,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 99,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 101,
                      "end": 112,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 103,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 101,
                        "end": 112,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 103,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 121,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 123,
                        "end": 124,
                        "value": 1,
                        "raw": "1"
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
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 172,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 268,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 181,
            "end": 218,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 187,
                "end": 217,
                "id": {
                  "type": "ObjectPattern",
                  "start": 187,
                  "end": 202,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 189,
                      "end": 191,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 191,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 191,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 193,
                      "end": 200,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 195,
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 193,
                        "end": 200,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 195,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 200,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 209,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 211,
                        "end": 215,
                        "value": "hi",
                        "raw": "'hi'"
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
            "start": 223,
            "end": 266,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 229,
                "end": 265,
                "id": {
                  "type": "ObjectPattern",
                  "start": 229,
                  "end": 250,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 231,
                      "end": 233,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 233,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 233,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 235,
                      "end": 248,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 237,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 235,
                        "end": 248,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 237,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 240,
                          "end": 248,
                          "left": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 242,
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 257,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 259,
                        "end": 263,
                        "value": "hi",
                        "raw": "'hi'"
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
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 323,
        "end": 430,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 329,
            "end": 373,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 335,
                "end": 372,
                "id": {
                  "type": "ObjectPattern",
                  "start": 335,
                  "end": 350,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 337,
                      "end": 339,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 339,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 339,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 341,
                      "end": 348,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 343,
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 341,
                        "end": 348,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 343,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 348,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 357,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 359,
                        "end": 363,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 365,
                      "end": 370,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 367,
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 369,
                        "end": 370,
                        "value": 1,
                        "raw": "1"
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
            "start": 378,
            "end": 428,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 427,
                "id": {
                  "type": "ObjectPattern",
                  "start": 384,
                  "end": 405,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 386,
                      "end": 388,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 388,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 388,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 390,
                      "end": 403,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 390,
                        "end": 392,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 390,
                        "end": 403,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 392,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 395,
                          "end": 403,
                          "left": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 397,
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 412,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 414,
                        "end": 418,
                        "value": "hi",
                        "raw": "'hi'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 420,
                      "end": 425,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 422,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 424,
                        "end": 425,
                        "value": 1,
                        "raw": "1"
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
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 596,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 596,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 596,
            "decorators": [],
            "name": "yadda",
            "optional": false,
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 611,
        "end": 652,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 617,
            "end": 650,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 623,
                "end": 649,
                "id": {
                  "type": "ObjectPattern",
                  "start": 623,
                  "end": 635,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 625,
                      "end": 626,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 626,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 626,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 628,
                      "end": 633,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 628,
                        "end": 629,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 628,
                        "end": 633,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 628,
                          "end": 629,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 632,
                          "end": 633,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "yadda",
                    "optional": false,
                    "typeAnnotation": null
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
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
