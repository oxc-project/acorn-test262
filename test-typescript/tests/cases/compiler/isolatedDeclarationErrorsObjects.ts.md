__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1306,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 15,
              "end": 38,
              "properties": [
                {
                  "type": "Property",
                  "start": 21,
                  "end": 25,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 24,
                    "end": 25,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 31,
                  "end": 36,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 34,
                    "end": 36,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 83,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 83,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 83,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "name": "oBad",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 58,
              "end": 83,
              "properties": [
                {
                  "type": "Property",
                  "start": 64,
                  "end": 80,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 67,
                    "end": 80,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 67,
                      "end": 78,
                      "object": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 71,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 78,
                        "name": "random",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 103,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 91,
        "end": 103,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 97,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 211,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 111,
        "end": 211,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 211,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 120,
              "name": "oBad2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 123,
              "end": 211,
              "properties": [
                {
                  "type": "Property",
                  "start": 129,
                  "end": 165,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 132,
                    "end": 165,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 142,
                        "end": 158,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "CallExpression",
                          "start": 145,
                          "end": 158,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 145,
                            "end": 156,
                            "object": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 149,
                              "name": "Math",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 150,
                              "end": 156,
                              "name": "random",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 171,
                  "end": 209,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 174,
                    "end": 209,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 184,
                        "end": 188,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 185,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 187,
                          "end": 188,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 198,
                        "end": 202,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 202,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 213,
      "end": 321,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 220,
        "end": 321,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 224,
            "end": 321,
            "id": {
              "type": "Identifier",
              "start": 224,
              "end": 236,
              "name": "oWithMethods",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 239,
              "end": 321,
              "properties": [
                {
                  "type": "Property",
                  "start": 245,
                  "end": 257,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 251,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 251,
                    "end": 257,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 254,
                      "end": 257,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 263,
                  "end": 283,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 271,
                    "name": "okMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 271,
                    "end": 283,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 280,
                      "end": 283,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 273,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 275,
                        "end": 279
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 289,
                  "end": 293,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 292,
                    "end": 293,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 299,
                  "end": 308,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 302,
                    "name": "bad",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 302,
                    "end": 308,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 305,
                      "end": 308,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 314,
                  "end": 318,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 318,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 322,
      "end": 458,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 329,
        "end": 458,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 333,
            "end": 458,
            "id": {
              "type": "Identifier",
              "start": 333,
              "end": 351,
              "name": "oWithMethodsNested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 354,
              "end": 458,
              "properties": [
                {
                  "type": "Property",
                  "start": 360,
                  "end": 456,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 360,
                    "end": 363,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 365,
                    "end": 456,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 375,
                        "end": 387,
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 381,
                          "name": "method",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 381,
                          "end": 387,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 384,
                            "end": 387,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 397,
                        "end": 401,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 397,
                          "end": 398,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 400,
                          "end": 401,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 411,
                        "end": 431,
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 411,
                          "end": 419,
                          "name": "okMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 419,
                          "end": 431,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 428,
                            "end": 431,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 421,
                            "end": 427,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 423,
                              "end": 427
                            }
                          }
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 441,
                        "end": 450,
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 444,
                          "name": "bad",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 444,
                          "end": 450,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 447,
                            "end": 450,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 462,
      "end": 862,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 469,
        "end": 862,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 473,
            "end": 862,
            "id": {
              "type": "Identifier",
              "start": 473,
              "end": 486,
              "name": "oWithAccessor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 489,
              "end": 862,
              "properties": [
                {
                  "type": "Property",
                  "start": 495,
                  "end": 529,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 514,
                    "name": "singleGetterBad",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 514,
                    "end": 529,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 517,
                      "end": 529,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 519,
                          "end": 527,
                          "argument": {
                            "type": "Literal",
                            "start": 526,
                            "end": 527,
                            "value": 0,
                            "raw": "0"
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
                },
                {
                  "type": "Property",
                  "start": 535,
                  "end": 565,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 554,
                    "name": "singleSetterBad",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 554,
                    "end": 565,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 555,
                        "end": 560,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 562,
                      "end": 565,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "set",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 572,
                  "end": 600,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 576,
                    "end": 585,
                    "name": "getSetBad",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 585,
                    "end": 600,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 588,
                      "end": 600,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 590,
                          "end": 598,
                          "argument": {
                            "type": "Literal",
                            "start": 597,
                            "end": 598,
                            "value": 0,
                            "raw": "0"
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
                },
                {
                  "type": "Property",
                  "start": 606,
                  "end": 630,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 619,
                    "name": "getSetBad",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 619,
                    "end": 630,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 620,
                        "end": 625,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 627,
                      "end": 630,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "set",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 637,
                  "end": 672,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 649,
                    "name": "getSetOk",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 649,
                    "end": 672,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 660,
                      "end": 672,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 662,
                          "end": 670,
                          "argument": {
                            "type": "Literal",
                            "start": 669,
                            "end": 670,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 651,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 653,
                        "end": 659
                      }
                    }
                  },
                  "kind": "get",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 678,
                  "end": 701,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 690,
                    "name": "getSetOk",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 690,
                    "end": 701,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 691,
                        "end": 696,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 698,
                      "end": 701,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "set",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 708,
                  "end": 736,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 721,
                    "name": "getSetOk2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 721,
                    "end": 736,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 724,
                      "end": 736,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 726,
                          "end": 734,
                          "argument": {
                            "type": "Literal",
                            "start": 733,
                            "end": 734,
                            "value": 0,
                            "raw": "0"
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
                },
                {
                  "type": "Property",
                  "start": 742,
                  "end": 774,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 746,
                    "end": 755,
                    "name": "getSetOk2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 755,
                    "end": 774,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 756,
                        "end": 769,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 761,
                          "end": 769,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 763,
                            "end": 769
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 771,
                      "end": 774,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "set",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 785,
                  "end": 821,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 789,
                    "end": 798,
                    "name": "getSetOk3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 798,
                    "end": 821,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 809,
                      "end": 821,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 811,
                          "end": 819,
                          "argument": {
                            "type": "Literal",
                            "start": 818,
                            "end": 819,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 800,
                      "end": 808,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 802,
                        "end": 808
                      }
                    }
                  },
                  "kind": "get",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 827,
                  "end": 859,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 831,
                    "end": 840,
                    "name": "getSetOk3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 840,
                    "end": 859,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 841,
                        "end": 854,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 846,
                          "end": 854,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 848,
                            "end": 854
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 856,
                      "end": 859,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "set",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 864,
      "end": 902,
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 877,
        "name": "prop",
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
          "start": 881,
          "end": 885,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 882,
            "end": 885,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 884,
              "end": 885,
              "typeName": {
                "type": "Identifier",
                "start": 884,
                "end": 885,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 890,
        "end": 902,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 892,
            "end": 900,
            "argument": {
              "type": "Identifier",
              "start": 899,
              "end": 900,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 877,
        "end": 880,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 878,
            "end": 879,
            "name": {
              "type": "Identifier",
              "start": 878,
              "end": 879,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 886,
        "end": 889,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 888,
          "end": 889,
          "typeName": {
            "type": "Identifier",
            "start": 888,
            "end": 889,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 904,
      "end": 938,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 910,
          "end": 937,
          "id": {
            "type": "Identifier",
            "start": 910,
            "end": 926,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 911,
              "end": 926,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 913,
                "end": 926,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 920,
                  "end": 926
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 929,
            "end": 937,
            "callee": {
              "type": "Identifier",
              "start": 929,
              "end": 935,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 939,
      "end": 962,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 945,
          "end": 961,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 956,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 948,
              "end": 956,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 950,
                "end": 956
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 959,
            "end": 961,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 963,
      "end": 985,
      "id": {
        "type": "Identifier",
        "start": 968,
        "end": 969,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 976,
          "end": 982,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 977,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 980,
            "end": 982,
            "value": 10,
            "raw": "10"
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 970,
        "end": 985,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 976,
            "end": 982,
            "id": {
              "type": "Identifier",
              "start": 976,
              "end": 977,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 980,
              "end": 982,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 986,
      "end": 1114,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 993,
        "end": 1114,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 999,
            "end": 1114,
            "id": {
              "type": "Identifier",
              "start": 999,
              "end": 1022,
              "name": "oWithComputedProperties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 1025,
              "end": 1114,
              "properties": [
                {
                  "type": "Property",
                  "start": 1031,
                  "end": 1037,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "start": 1032,
                    "end": 1033,
                    "value": 1,
                    "raw": "1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1036,
                    "end": 1037,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1043,
                  "end": 1053,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "BinaryExpression",
                    "start": 1044,
                    "end": 1049,
                    "left": {
                      "type": "Literal",
                      "start": 1044,
                      "end": 1045,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 1048,
                      "end": 1049,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1052,
                    "end": 1053,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1059,
                  "end": 1071,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 1060,
                    "end": 1067,
                    "callee": {
                      "type": "Identifier",
                      "start": 1060,
                      "end": 1064,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1065,
                        "end": 1066,
                        "value": 2,
                        "raw": "2"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1070,
                    "end": 1071,
                    "value": 2,
                    "raw": "2"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1077,
                  "end": 1083,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 1078,
                    "end": 1079,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1082,
                    "end": 1083,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1089,
                  "end": 1097,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 1090,
                    "end": 1093,
                    "object": {
                      "type": "Identifier",
                      "start": 1090,
                      "end": 1091,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1092,
                      "end": 1093,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1096,
                    "end": 1097,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1103,
                  "end": 1111,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 1104,
                    "end": 1107,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1110,
                    "end": 1111,
                    "value": 0,
                    "raw": "0"
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1116,
      "end": 1138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1122,
          "end": 1137,
          "id": {
            "type": "Identifier",
            "start": 1122,
            "end": 1126,
            "name": "part",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1129,
            "end": 1137,
            "properties": [
              {
                "type": "Property",
                "start": 1131,
                "end": 1135,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1131,
                  "end": 1132,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1134,
                  "end": 1135,
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
      "type": "ExportNamedDeclaration",
      "start": 1140,
      "end": 1213,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1147,
        "end": 1213,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1153,
            "end": 1213,
            "id": {
              "type": "Identifier",
              "start": 1153,
              "end": 1164,
              "name": "oWithSpread",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 1167,
              "end": 1213,
              "properties": [
                {
                  "type": "Property",
                  "start": 1173,
                  "end": 1177,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1173,
                    "end": 1174,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1176,
                    "end": 1177,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "SpreadElement",
                  "start": 1183,
                  "end": 1190,
                  "argument": {
                    "type": "Identifier",
                    "start": 1186,
                    "end": 1190,
                    "name": "part",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Property",
                  "start": 1196,
                  "end": 1200,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1197,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1199,
                    "end": 1200,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1206,
                  "end": 1210,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1210,
                    "name": "part",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1210,
                    "name": "part",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1216,
      "end": 1305,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1223,
        "end": 1305,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1229,
            "end": 1305,
            "id": {
              "type": "Identifier",
              "start": 1229,
              "end": 1241,
              "name": "oWithSpread2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 1244,
              "end": 1305,
              "properties": [
                {
                  "type": "Property",
                  "start": 1250,
                  "end": 1254,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1251,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1253,
                    "end": 1254,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1260,
                  "end": 1292,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1260,
                    "end": 1266,
                    "name": "nested",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 1268,
                    "end": 1292,
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "start": 1278,
                        "end": 1285,
                        "argument": {
                          "type": "Identifier",
                          "start": 1281,
                          "end": 1285,
                          "name": "part",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1298,
                  "end": 1302,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1298,
                    "end": 1299,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1301,
                    "end": 1302,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
