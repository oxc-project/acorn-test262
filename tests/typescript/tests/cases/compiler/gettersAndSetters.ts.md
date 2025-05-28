__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 1057,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 398,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
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
        "start": 19,
        "end": 398,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 45,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "fooBack",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 42,
              "end": 44,
              "value": "",
              "raw": "\"\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 77,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "barBack",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 71,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              }
            },
            "value": {
              "type": "Literal",
              "start": 74,
              "end": 76,
              "value": "",
              "raw": "\"\""
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 96,
              "decorators": [],
              "name": "bazBack",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 99,
              "end": 101,
              "value": "",
              "raw": "\"\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 152,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 152,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 131,
                    "end": 151,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 138,
                      "end": 150,
                      "object": {
                        "type": "ThisExpression",
                        "start": 138,
                        "end": 142
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 150,
                        "decorators": [],
                        "name": "fooBack",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 211,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 188,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 188,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 182,
                      "end": 188
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 211,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 210,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 191,
                      "end": 209,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 191,
                        "end": 203,
                        "object": {
                          "type": "ThisExpression",
                          "start": 191,
                          "end": 195
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 203,
                          "decorators": [],
                          "name": "fooBack",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 209,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 223,
            "end": 259,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 237,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 237,
              "end": 259,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 259,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 241,
                    "end": 258,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 257,
                      "object": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 257,
                        "decorators": [],
                        "name": "barBack",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 315,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 284,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 284,
              "end": 315,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 285,
                  "end": 295,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 288,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 289,
                      "end": 295
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 315,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 298,
                    "end": 314,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 298,
                      "end": 313,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 298,
                        "end": 307,
                        "object": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 299,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 300,
                          "end": 307,
                          "decorators": [],
                          "name": "barBack",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 313,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 353,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 334,
              "end": 337,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 340,
              "end": 353,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 351,
                "end": 353,
                "body": []
              },
              "expression": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 364,
            "end": 390,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 374,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 390,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 388,
                "end": 390,
                "body": []
              },
              "expression": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 400,
      "end": 416,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 408,
            "end": 415,
            "callee": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 434,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 433,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 428,
            "end": 433,
            "object": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 430,
              "end": 433,
              "decorators": [],
              "name": "Foo",
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
      "type": "ExpressionStatement",
      "start": 435,
      "end": 450,
      "expression": {
        "type": "AssignmentExpression",
        "start": 435,
        "end": 449,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 435,
          "end": 440,
          "object": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 437,
            "end": 440,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 443,
          "end": 449,
          "value": "foov",
          "raw": "\"foov\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 468,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 459,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 462,
            "end": 467,
            "object": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 464,
              "end": 467,
              "decorators": [],
              "name": "Bar",
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
      "type": "ExpressionStatement",
      "start": 469,
      "end": 484,
      "expression": {
        "type": "AssignmentExpression",
        "start": 469,
        "end": 483,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 469,
          "end": 474,
          "object": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 471,
            "end": 474,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 477,
          "end": 483,
          "value": "barv",
          "raw": "\"barv\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 502,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 501,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 493,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 496,
            "end": 501,
            "object": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 498,
              "end": 501,
              "decorators": [],
              "name": "Baz",
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
      "type": "ExpressionStatement",
      "start": 503,
      "end": 518,
      "expression": {
        "type": "AssignmentExpression",
        "start": 503,
        "end": 517,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 503,
          "end": 508,
          "object": {
            "type": "Identifier",
            "start": 503,
            "end": 504,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 508,
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 511,
          "end": 517,
          "value": "bazv",
          "raw": "\"bazv\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 611,
      "end": 685,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 632,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 632,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 619,
                "end": 632,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 620,
                    "end": 631,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 623,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 623,
                      "end": 630,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 624,
                        "end": 630
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 635,
            "end": 684,
            "properties": [
              {
                "type": "Property",
                "start": 636,
                "end": 657,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 643,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 643,
                  "end": 657,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 646,
                    "end": 657,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 647,
                        "end": 656,
                        "argument": {
                          "type": "Literal",
                          "start": 654,
                          "end": 655,
                          "value": 0,
                          "raw": "0"
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
              },
              {
                "type": "Property",
                "start": 659,
                "end": 683,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 666,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 666,
                  "end": 683,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 667,
                      "end": 677,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 670,
                        "end": 677,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 671,
                          "end": 677
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 678,
                    "end": 683,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 679,
                        "end": 682,
                        "expression": {
                          "type": "Identifier",
                          "start": 679,
                          "end": 682,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 708,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 707,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 699,
            "decorators": [],
            "name": "ofg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 702,
            "end": 707,
            "object": {
              "type": "Identifier",
              "start": 702,
              "end": 703,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 704,
              "end": 707,
              "decorators": [],
              "name": "Foo",
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
      "type": "ExpressionStatement",
      "start": 709,
      "end": 719,
      "expression": {
        "type": "AssignmentExpression",
        "start": 709,
        "end": 718,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 709,
          "end": 714,
          "object": {
            "type": "Identifier",
            "start": 709,
            "end": 710,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 711,
            "end": 714,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 717,
          "end": 718,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 722,
      "end": 761,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 734,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 735,
        "end": 761,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 741,
            "end": 759,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 742,
                "end": 750,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 743,
                  "end": 750,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 744,
                    "end": 750
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 758,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 752,
                "end": 758
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 763,
      "end": 798,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 798,
          "id": {
            "type": "Identifier",
            "start": 767,
            "end": 771,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 768,
              "end": 771,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 769,
                "end": 771,
                "typeName": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 771,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 774,
            "end": 798,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 787,
              "end": 798,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 788,
                  "end": 797,
                  "argument": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 796,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 882,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 827,
          "end": 881,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 845,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 828,
              "end": 845,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 830,
                "end": 845,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 830,
                    "end": 836
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 839,
                    "end": 845
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 848,
            "end": 881,
            "test": {
              "type": "BinaryExpression",
              "start": 848,
              "end": 867,
              "left": {
                "type": "CallExpression",
                "start": 848,
                "end": 861,
                "callee": {
                  "type": "MemberExpression",
                  "start": 848,
                  "end": 859,
                  "object": {
                    "type": "Identifier",
                    "start": 848,
                    "end": 852,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 853,
                    "end": 859,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 864,
                "end": 867,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 870,
              "end": 875,
              "value": "str",
              "raw": "\"str\""
            },
            "alternate": {
              "type": "Literal",
              "start": 878,
              "end": 881,
              "value": 123,
              "raw": "123"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 883,
      "end": 1057,
      "test": {
        "type": "BinaryExpression",
        "start": 887,
        "end": 908,
        "left": {
          "type": "UnaryExpression",
          "start": 887,
          "end": 895,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 894,
            "end": 895,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 900,
          "end": 908,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 910,
        "end": 1057,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 914,
            "end": 1055,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 918,
                "end": 1055,
                "id": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 921,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 924,
                  "end": 1055,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 930,
                      "end": 967,
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "start": 934,
                        "end": 938,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 938,
                        "end": 967,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 939,
                            "end": 945,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 940,
                              "end": 945,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 942,
                                "end": 945
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 947,
                          "end": 967,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 949,
                              "end": 965,
                              "expression": {
                                "type": "CallExpression",
                                "start": 949,
                                "end": 964,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 949,
                                  "end": 962,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 949,
                                    "end": 950,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 951,
                                    "end": 962,
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 973,
                      "end": 1010,
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "start": 977,
                        "end": 981,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 981,
                        "end": 1010,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 984,
                          "end": 1010,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 986,
                              "end": 1008,
                              "argument": {
                                "type": "CallExpression",
                                "start": 993,
                                "end": 1008,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 993,
                                  "end": 1006,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 993,
                                    "end": 994,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 995,
                                    "end": 1006,
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
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
                    },
                    {
                      "type": "Property",
                      "start": 1016,
                      "end": 1051,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1016,
                        "end": 1022,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 1022,
                        "end": 1051,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1025,
                          "end": 1051,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1027,
                              "end": 1049,
                              "argument": {
                                "type": "CallExpression",
                                "start": 1034,
                                "end": 1049,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1034,
                                  "end": 1047,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1034,
                                    "end": 1035,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1036,
                                    "end": 1047,
                                    "decorators": [],
                                    "name": "toUpperCase",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": true,
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
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
