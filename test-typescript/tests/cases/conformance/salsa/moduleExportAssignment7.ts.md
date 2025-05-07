__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 48,
              "end": 49,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 41,
        "decorators": [],
        "name": "AnotherThing",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 80,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 80,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 70,
            "end": 78,
            "argument": {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 81,
      "end": 108,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 108,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 98,
            "end": 106,
            "argument": {
              "type": "Literal",
              "start": 105,
              "end": 106,
              "raw": "4",
              "value": 4,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 257,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 144,
        "end": 257,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 144,
          "end": 158,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 144,
            "end": 150,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 158,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 161,
          "end": 257,
          "properties": [
            {
              "type": "Property",
              "start": 167,
              "end": 172,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 167,
                "end": 172,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 167,
                "end": 172,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 178,
              "end": 190,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 178,
                "end": 190,
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 178,
                "end": 190,
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 196,
              "end": 199,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 196,
                "end": 199,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 196,
                "end": 199,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 205,
              "end": 213,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 205,
                "end": 208,
                "decorators": [],
                "name": "qux",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 210,
                "end": 213,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 219,
              "end": 237,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 219,
                "end": 222,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 222,
                "end": 237,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 225,
                  "end": 237,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 227,
                      "end": 235,
                      "argument": {
                        "type": "Literal",
                        "start": 234,
                        "end": 235,
                        "raw": "5",
                        "value": 5,
                        "regex": null,
                        "bigint": null
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
              "start": 243,
              "end": 254,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 243,
                "end": 250,
                "decorators": [],
                "name": "literal",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 252,
                "end": 254,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 261,
  "end": 779,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 261,
      "end": 358,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 299,
        "end": 358,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 305,
            "end": 356,
            "argument": {
              "type": "BinaryExpression",
              "start": 312,
              "end": 356,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 312,
                "end": 345,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 312,
                  "end": 339,
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 312,
                    "end": 333,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 312,
                      "end": 327,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 312,
                        "end": 321,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 312,
                          "end": 315,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 312,
                            "end": 313,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 315,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 318,
                          "end": 321,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 319,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 320,
                            "end": 321,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 324,
                        "end": 327,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 324,
                          "end": 325,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 330,
                      "end": 333,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 336,
                    "end": 339,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 342,
                  "end": 345,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 348,
                "end": 356,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 356,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 277,
        "decorators": [],
        "name": "jstypes",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 278,
          "end": 279,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 281,
          "end": 282,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 284,
          "end": 285,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 287,
          "end": 288,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 670,
      "end": 778,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 709,
        "end": 778,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 715,
            "end": 776,
            "argument": {
              "type": "BinaryExpression",
              "start": 722,
              "end": 776,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 722,
                "end": 765,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 722,
                  "end": 759,
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 722,
                    "end": 753,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 722,
                      "end": 747,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 722,
                        "end": 741,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 722,
                          "end": 730,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 722,
                            "end": 723,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 724,
                            "end": 730,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 733,
                          "end": 741,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 733,
                            "end": 734,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 735,
                            "end": 741,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 744,
                        "end": 747,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 745,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 750,
                      "end": 753,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 750,
                        "end": 751,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 756,
                    "end": 759,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 756,
                      "end": 757,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 762,
                  "end": 765,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 763,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 768,
                "end": 776,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 769,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 776,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 679,
        "end": 687,
        "decorators": [],
        "name": "jsvalues",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 688,
          "end": 689,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 691,
          "end": 692,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 694,
          "end": 695,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 697,
          "end": 698,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 700,
          "end": 701,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 703,
          "end": 704,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 706,
          "end": 707,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 638,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 288,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 229,
        "end": 288,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 235,
            "end": 286,
            "argument": {
              "type": "BinaryExpression",
              "start": 242,
              "end": 286,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 242,
                "end": 275,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 242,
                  "end": 269,
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 242,
                    "end": 263,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 242,
                      "end": 257,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 242,
                        "end": 251,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 242,
                          "end": 245,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 243,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 245,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 248,
                          "end": 251,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 249,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 250,
                            "end": 251,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 254,
                        "end": 257,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 260,
                      "end": 263,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 266,
                    "end": 269,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 272,
                  "end": 275,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 278,
                "end": 286,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 279,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 286,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "types",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 44,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 44,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 23,
              "end": 44,
              "argument": {
                "type": "TSLiteralType",
                "start": 30,
                "end": 37,
                "literal": {
                  "type": "Literal",
                  "start": 30,
                  "end": 37,
                  "raw": "'./mod'",
                  "value": "./mod",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 81,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 81,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 53,
              "end": 81,
              "argument": {
                "type": "TSLiteralType",
                "start": 60,
                "end": 67,
                "literal": {
                  "type": "Literal",
                  "start": 60,
                  "end": 67,
                  "raw": "'./mod'",
                  "value": "./mod",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 69,
                "end": 81,
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 109,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 109,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 90,
              "end": 109,
              "argument": {
                "type": "TSLiteralType",
                "start": 97,
                "end": 104,
                "literal": {
                  "type": "Literal",
                  "start": 97,
                  "end": 104,
                  "raw": "'./mod'",
                  "value": "./mod",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 106,
                "end": 109,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 115,
          "end": 137,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 137,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 118,
              "end": 137,
              "argument": {
                "type": "TSLiteralType",
                "start": 125,
                "end": 132,
                "literal": {
                  "type": "Literal",
                  "start": 125,
                  "end": 132,
                  "raw": "'./mod'",
                  "value": "./mod",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "qux",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 143,
          "end": 165,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 165,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 146,
              "end": 165,
              "argument": {
                "type": "TSLiteralType",
                "start": 153,
                "end": 160,
                "literal": {
                  "type": "Literal",
                  "start": 153,
                  "end": 160,
                  "raw": "'./mod'",
                  "value": "./mod",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 162,
                "end": 165,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 171,
          "end": 193,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 193,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 174,
              "end": 193,
              "argument": {
                "type": "TSLiteralType",
                "start": 181,
                "end": 188,
                "literal": {
                  "type": "Literal",
                  "start": 181,
                  "end": 188,
                  "raw": "'./mod'",
                  "value": "./mod",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 190,
                "end": 193,
                "decorators": [],
                "name": "buz",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 199,
          "end": 225,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 200,
            "end": 225,
            "typeAnnotation": {
              "type": "TSImportType",
              "start": 202,
              "end": 225,
              "argument": {
                "type": "TSLiteralType",
                "start": 209,
                "end": 216,
                "literal": {
                  "type": "Literal",
                  "start": 209,
                  "end": 216,
                  "raw": "'./mod'",
                  "value": "./mod",
                  "regex": null,
                  "bigint": null
                }
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "start": 218,
                "end": 225,
                "decorators": [],
                "name": "literal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 290,
      "end": 638,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 569,
        "end": 638,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 575,
            "end": 636,
            "argument": {
              "type": "BinaryExpression",
              "start": 582,
              "end": 636,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 582,
                "end": 625,
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "start": 582,
                  "end": 619,
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 582,
                    "end": 613,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 582,
                      "end": 607,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 582,
                        "end": 601,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 582,
                          "end": 590,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 582,
                            "end": 583,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 584,
                            "end": 590,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 593,
                          "end": 601,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 593,
                            "end": 594,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 595,
                            "end": 601,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 604,
                        "end": 607,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 610,
                      "end": 613,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 616,
                    "end": 619,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 616,
                      "end": 617,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 622,
                  "end": 625,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 623,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 628,
                "end": 636,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 629,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 636,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 305,
        "decorators": [],
        "name": "values",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 342,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 342,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 314,
              "end": 342,
              "exprName": {
                "type": "TSImportType",
                "start": 321,
                "end": 342,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 328,
                  "end": 335,
                  "literal": {
                    "type": "Literal",
                    "start": 328,
                    "end": 335,
                    "raw": "'./mod'",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 342,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 348,
          "end": 386,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 386,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 351,
              "end": 386,
              "exprName": {
                "type": "TSImportType",
                "start": 358,
                "end": 386,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 365,
                  "end": 372,
                  "literal": {
                    "type": "Literal",
                    "start": 365,
                    "end": 372,
                    "raw": "'./mod'",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 386,
                  "decorators": [],
                  "name": "AnotherThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 392,
          "end": 421,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 393,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 395,
              "end": 421,
              "exprName": {
                "type": "TSImportType",
                "start": 402,
                "end": 421,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 409,
                  "end": 416,
                  "literal": {
                    "type": "Literal",
                    "start": 409,
                    "end": 416,
                    "raw": "'./mod'",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 421,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 427,
          "end": 456,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 456,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 430,
              "end": 456,
              "exprName": {
                "type": "TSImportType",
                "start": 437,
                "end": 456,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 444,
                  "end": 451,
                  "literal": {
                    "type": "Literal",
                    "start": 444,
                    "end": 451,
                    "raw": "'./mod'",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 456,
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 462,
          "end": 491,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 463,
            "end": 491,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 465,
              "end": 491,
              "exprName": {
                "type": "TSImportType",
                "start": 472,
                "end": 491,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 479,
                  "end": 486,
                  "literal": {
                    "type": "Literal",
                    "start": 479,
                    "end": 486,
                    "raw": "'./mod'",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 491,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 497,
          "end": 526,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 498,
            "end": 526,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 500,
              "end": 526,
              "exprName": {
                "type": "TSImportType",
                "start": 507,
                "end": 526,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 514,
                  "end": 521,
                  "literal": {
                    "type": "Literal",
                    "start": 514,
                    "end": 521,
                    "raw": "'./mod'",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 526,
                  "decorators": [],
                  "name": "buz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 532,
          "end": 565,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 533,
            "end": 565,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 535,
              "end": 565,
              "exprName": {
                "type": "TSImportType",
                "start": 542,
                "end": 565,
                "argument": {
                  "type": "TSLiteralType",
                  "start": 549,
                  "end": 556,
                  "literal": {
                    "type": "Literal",
                    "start": 549,
                    "end": 556,
                    "raw": "'./mod'",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 565,
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
