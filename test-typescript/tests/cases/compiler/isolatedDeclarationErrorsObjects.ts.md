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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 24,
                    "end": 25,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 31,
                  "end": 36,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 34,
                    "end": 36,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 83,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 83,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 83,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "decorators": [],
              "name": "oBad",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 67,
                    "end": 80,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 67,
                      "end": 78,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 71,
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 78,
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 91,
        "end": 103,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 97,
            "end": 102,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 211,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 111,
        "end": 211,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 211,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 120,
              "decorators": [],
              "name": "oBad2",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 132,
                    "end": 165,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 142,
                        "end": 158,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "CallExpression",
                          "start": 145,
                          "end": 158,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 145,
                            "end": 156,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 149,
                              "decorators": [],
                              "name": "Math",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 150,
                              "end": 156,
                              "decorators": [],
                              "name": "random",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 171,
                  "end": 209,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 174,
                    "end": 209,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 184,
                        "end": 188,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 185,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 187,
                          "end": 188,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "Property",
                        "start": 198,
                        "end": 202,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 202,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 213,
      "end": 321,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 220,
        "end": 321,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 224,
            "end": 321,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 224,
              "end": 236,
              "decorators": [],
              "name": "oWithMethods",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 251,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 251,
                    "end": 257,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 254,
                      "end": 257,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 263,
                  "end": 283,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 271,
                    "decorators": [],
                    "name": "okMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 271,
                    "end": 283,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 280,
                      "end": 283,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 273,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 275,
                        "end": 279
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 289,
                  "end": 293,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 292,
                    "end": 293,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 299,
                  "end": 308,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 302,
                    "decorators": [],
                    "name": "bad",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 302,
                    "end": 308,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 305,
                      "end": 308,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 314,
                  "end": 318,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 318,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 322,
      "end": 458,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 329,
        "end": 458,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 333,
            "end": 458,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 333,
              "end": 351,
              "decorators": [],
              "name": "oWithMethodsNested",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 360,
                    "end": 363,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 365,
                    "end": 456,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 375,
                        "end": 387,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 381,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 381,
                          "end": 387,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 384,
                            "end": 387,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 397,
                        "end": 401,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 397,
                          "end": 398,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 400,
                          "end": 401,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "Property",
                        "start": 411,
                        "end": 431,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 411,
                          "end": 419,
                          "decorators": [],
                          "name": "okMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 419,
                          "end": 431,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 428,
                            "end": 431,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 421,
                            "end": 427,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 423,
                              "end": 427
                            }
                          },
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 441,
                        "end": 450,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 444,
                          "decorators": [],
                          "name": "bad",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 444,
                          "end": 450,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 447,
                            "end": 450,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 462,
      "end": 862,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 469,
        "end": 862,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 473,
            "end": 862,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 473,
              "end": 486,
              "decorators": [],
              "name": "oWithAccessor",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 514,
                    "decorators": [],
                    "name": "singleGetterBad",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 514,
                    "end": 529,
                    "async": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 535,
                  "end": 565,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 554,
                    "decorators": [],
                    "name": "singleSetterBad",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 554,
                    "end": 565,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 562,
                      "end": 565,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 555,
                        "end": 560,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 572,
                  "end": 600,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 576,
                    "end": 585,
                    "decorators": [],
                    "name": "getSetBad",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 585,
                    "end": 600,
                    "async": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 606,
                  "end": 630,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 619,
                    "decorators": [],
                    "name": "getSetBad",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 619,
                    "end": 630,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 627,
                      "end": 630,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 620,
                        "end": 625,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 637,
                  "end": 672,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 649,
                    "decorators": [],
                    "name": "getSetOk",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 649,
                    "end": 672,
                    "async": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 651,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 653,
                        "end": 659
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 678,
                  "end": 701,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 690,
                    "decorators": [],
                    "name": "getSetOk",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 690,
                    "end": 701,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 698,
                      "end": 701,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 691,
                        "end": 696,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 708,
                  "end": 736,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 721,
                    "decorators": [],
                    "name": "getSetOk2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 721,
                    "end": 736,
                    "async": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 742,
                  "end": 774,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 746,
                    "end": 755,
                    "decorators": [],
                    "name": "getSetOk2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 755,
                    "end": 774,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 771,
                      "end": 774,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 756,
                        "end": 769,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 761,
                          "end": 769,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 763,
                            "end": 769
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 785,
                  "end": 821,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 789,
                    "end": 798,
                    "decorators": [],
                    "name": "getSetOk3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 798,
                    "end": 821,
                    "async": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 800,
                      "end": 808,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 802,
                        "end": 808
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 827,
                  "end": 859,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 831,
                    "end": 840,
                    "decorators": [],
                    "name": "getSetOk3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 840,
                    "end": 859,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 856,
                      "end": 859,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 841,
                        "end": 854,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 846,
                          "end": 854,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 848,
                            "end": 854
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 864,
      "end": 902,
      "async": false,
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
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 877,
        "decorators": [],
        "name": "prop",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 881,
          "end": 885,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 882,
            "end": 885,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 884,
              "end": 885,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 884,
                "end": 885,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 886,
        "end": 889,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 888,
          "end": 889,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 888,
            "end": 889,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 877,
        "end": 880,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 878,
            "end": 879,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 878,
              "end": 879,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 910,
            "end": 926,
            "decorators": [],
            "name": "s",
            "optional": false,
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
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 929,
            "end": 937,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 929,
              "end": 935,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 956,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 948,
              "end": 956,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 950,
                "end": 956
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 959,
            "end": 961,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 963,
      "end": 985,
      "body": {
        "type": "TSEnumBody",
        "start": 970,
        "end": 985,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 976,
            "end": 982,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 976,
              "end": 977,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 980,
              "end": 982,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 968,
        "end": 969,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 986,
      "end": 1114,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 993,
        "end": 1114,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 999,
            "end": 1114,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 999,
              "end": 1022,
              "decorators": [],
              "name": "oWithComputedProperties",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "start": 1032,
                    "end": 1033,
                    "raw": "1",
                    "value": 1
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1036,
                    "end": 1037,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 1043,
                  "end": 1053,
                  "computed": true,
                  "key": {
                    "type": "BinaryExpression",
                    "start": 1044,
                    "end": 1049,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 1044,
                      "end": 1045,
                      "raw": "1",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1048,
                      "end": 1049,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1052,
                    "end": 1053,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 1059,
                  "end": 1071,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 1060,
                    "end": 1067,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1065,
                        "end": 1066,
                        "raw": "2",
                        "value": 2
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1060,
                      "end": 1064,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1070,
                    "end": 1071,
                    "raw": "2",
                    "value": 2
                  }
                },
                {
                  "type": "Property",
                  "start": 1077,
                  "end": 1083,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 1078,
                    "end": 1079,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1082,
                    "end": 1083,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 1089,
                  "end": 1097,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 1090,
                    "end": 1093,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1090,
                      "end": 1091,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1092,
                      "end": 1093,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1096,
                    "end": 1097,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 1103,
                  "end": 1111,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 1104,
                    "end": 1107,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1110,
                    "end": 1111,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1122,
            "end": 1126,
            "decorators": [],
            "name": "part",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1131,
                  "end": 1132,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1134,
                  "end": 1135,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1140,
      "end": 1213,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1147,
        "end": 1213,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1153,
            "end": 1213,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1153,
              "end": 1164,
              "decorators": [],
              "name": "oWithSpread",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1173,
                    "end": 1174,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1176,
                    "end": 1177,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1183,
                  "end": 1190,
                  "argument": {
                    "type": "Identifier",
                    "start": 1186,
                    "end": 1190,
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1196,
                  "end": 1200,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1197,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1199,
                    "end": 1200,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 1206,
                  "end": 1210,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1210,
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1210,
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1216,
      "end": 1305,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1223,
        "end": 1305,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1229,
            "end": 1305,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1229,
              "end": 1241,
              "decorators": [],
              "name": "oWithSpread2",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1251,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1253,
                    "end": 1254,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 1260,
                  "end": 1292,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1260,
                    "end": 1266,
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
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
                          "decorators": [],
                          "name": "part",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 1298,
                  "end": 1302,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1298,
                    "end": 1299,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1301,
                    "end": 1302,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
