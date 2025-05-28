__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 839,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 14,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 9,
                "end": 14,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 9,
                    "end": 10,
                    "literal": {
                      "type": "Literal",
                      "start": 9,
                      "end": 10,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 13,
                    "end": 14,
                    "literal": {
                      "type": "Literal",
                      "start": 13,
                      "end": 14,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 17,
            "end": 36,
            "test": {
              "type": "CallExpression",
              "start": 17,
              "end": 30,
              "callee": {
                "type": "MemberExpression",
                "start": 17,
                "end": 28,
                "object": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 28,
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
            "consequent": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "value": 0,
              "raw": "0"
            },
            "alternate": {
              "type": "Literal",
              "start": 35,
              "end": 36,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 61,
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 71,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 71,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 88,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 74,
          "end": 88,
          "parameterName": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 88,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 87,
              "end": 88,
              "literal": {
                "type": "Literal",
                "start": 87,
                "end": 88,
                "value": 1,
                "raw": "1"
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 100,
      "expression": {
        "type": "CallExpression",
        "start": 90,
        "end": 99,
        "callee": {
          "type": "Identifier",
          "start": 90,
          "end": 96,
          "decorators": [],
          "name": "assert",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 101,
      "end": 169,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 108,
        "end": 169,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 112,
            "end": 169,
            "id": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 116,
              "end": 169,
              "properties": [
                {
                  "type": "Property",
                  "start": 122,
                  "end": 128,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 127,
                    "end": 128,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 186,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 182,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 182,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 181,
                "end": 182,
                "literal": {
                  "type": "Literal",
                  "start": 181,
                  "end": 182,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 185,
            "end": 186,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 187,
      "end": 246,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 246,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 198,
            "end": 246,
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 200,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 203,
              "end": 246,
              "properties": [
                {
                  "type": "Property",
                  "start": 209,
                  "end": 215,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 214,
                    "end": 215,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 267,
      "end": 293,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 274,
        "end": 293,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 278,
            "end": 293,
            "id": {
              "type": "Identifier",
              "start": 278,
              "end": 280,
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 283,
              "end": 293,
              "properties": [
                {
                  "type": "Property",
                  "start": 285,
                  "end": 291,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 286,
                    "end": 287,
                    "value": 1,
                    "raw": "1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 290,
                    "end": 291,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 294,
      "end": 322,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 301,
        "end": 322,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 305,
            "end": 322,
            "id": {
              "type": "Identifier",
              "start": 305,
              "end": 308,
              "decorators": [],
              "name": "o31",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 311,
              "end": 322,
              "properties": [
                {
                  "type": "Property",
                  "start": 313,
                  "end": 320,
                  "kind": "init",
                  "key": {
                    "type": "UnaryExpression",
                    "start": 314,
                    "end": 316,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 315,
                      "end": 316,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "value": {
                    "type": "Literal",
                    "start": 319,
                    "end": 320,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 324,
      "end": 353,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 331,
        "end": 353,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 335,
            "end": 353,
            "id": {
              "type": "Identifier",
              "start": 335,
              "end": 338,
              "decorators": [],
              "name": "o32",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 341,
              "end": 353,
              "properties": [
                {
                  "type": "Property",
                  "start": 343,
                  "end": 351,
                  "kind": "init",
                  "key": {
                    "type": "BinaryExpression",
                    "start": 344,
                    "end": 347,
                    "left": {
                      "type": "Literal",
                      "start": 344,
                      "end": 345,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "start": 346,
                      "end": 347,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "start": 350,
                    "end": 351,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 389,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 377,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 380,
            "end": 388,
            "callee": {
              "type": "Identifier",
              "start": 380,
              "end": 386,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 390,
      "end": 457,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 397,
        "end": 457,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 401,
            "end": 457,
            "id": {
              "type": "Identifier",
              "start": 401,
              "end": 403,
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 406,
              "end": 457,
              "properties": [
                {
                  "type": "Property",
                  "start": 412,
                  "end": 418,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 417,
                    "end": 418,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 459,
      "end": 512,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 466,
        "end": 512,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 470,
            "end": 512,
            "id": {
              "type": "Identifier",
              "start": 470,
              "end": 472,
              "decorators": [],
              "name": "o5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 475,
              "end": 512,
              "properties": [
                {
                  "type": "Property",
                  "start": 481,
                  "end": 494,
                  "kind": "init",
                  "key": {
                    "type": "CallExpression",
                    "start": 482,
                    "end": 490,
                    "callee": {
                      "type": "Identifier",
                      "start": 482,
                      "end": 488,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 493,
                    "end": 494,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 514,
      "end": 549,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 537,
            "decorators": [],
            "name": "uu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 537,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 524,
                "end": 537,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 531,
                  "end": 537
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 540,
            "end": 548,
            "callee": {
              "type": "Identifier",
              "start": 540,
              "end": 546,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 550,
      "end": 598,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 557,
        "end": 598,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 561,
            "end": 598,
            "id": {
              "type": "Identifier",
              "start": 561,
              "end": 563,
              "decorators": [],
              "name": "o6",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 567,
              "end": 598,
              "properties": [
                {
                  "type": "Property",
                  "start": 573,
                  "end": 580,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 576,
                    "decorators": [],
                    "name": "uu",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 579,
                    "end": 580,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 601,
      "end": 633,
      "id": {
        "type": "Identifier",
        "start": 610,
        "end": 613,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 616,
        "end": 619,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 618,
          "end": 619,
          "literal": {
            "type": "Literal",
            "start": 618,
            "end": 619,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 620,
        "end": 633,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 622,
            "end": 631,
            "argument": {
              "type": "Literal",
              "start": 629,
              "end": 630,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 634,
      "end": 685,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 641,
        "end": 685,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 645,
            "end": 684,
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "decorators": [],
              "name": "o7",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 650,
              "end": 684,
              "properties": [
                {
                  "type": "Property",
                  "start": 656,
                  "end": 666,
                  "kind": "init",
                  "key": {
                    "type": "CallExpression",
                    "start": 657,
                    "end": 662,
                    "callee": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 660,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 665,
                    "end": 666,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 687,
      "end": 712,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 692,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 695,
            "end": 712,
            "expression": {
              "type": "ObjectExpression",
              "start": 695,
              "end": 703,
              "properties": [
                {
                  "type": "Property",
                  "start": 697,
                  "end": 701,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 698,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 700,
                    "end": 701,
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
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 707,
              "end": 712,
              "typeName": {
                "type": "Identifier",
                "start": 707,
                "end": 712,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 713,
      "end": 757,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 720,
        "end": 757,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 726,
            "end": 757,
            "id": {
              "type": "Identifier",
              "start": 726,
              "end": 728,
              "decorators": [],
              "name": "o8",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 731,
              "end": 757,
              "properties": [
                {
                  "type": "Property",
                  "start": 737,
                  "end": 745,
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "start": 738,
                    "end": 741,
                    "object": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 739,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 744,
                    "end": 745,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 759,
      "end": 801,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 770,
        "decorators": [],
        "name": "ns",
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
        "start": 773,
        "end": 801,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 775,
            "end": 799,
            "argument": {
              "type": "TSAsExpression",
              "start": 782,
              "end": 799,
              "expression": {
                "type": "ObjectExpression",
                "start": 782,
                "end": 790,
                "properties": [
                  {
                    "type": "Property",
                    "start": 784,
                    "end": 788,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 784,
                      "end": 785,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 787,
                      "end": 788,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 794,
                "end": 799,
                "typeName": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 799,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 802,
      "end": 839,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 809,
        "end": 839,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 815,
            "end": 839,
            "id": {
              "type": "Identifier",
              "start": 815,
              "end": 817,
              "decorators": [],
              "name": "o9",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 820,
              "end": 839,
              "properties": [
                {
                  "type": "Property",
                  "start": 826,
                  "end": 837,
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "start": 827,
                    "end": 833,
                    "object": {
                      "type": "CallExpression",
                      "start": 827,
                      "end": 831,
                      "callee": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 829,
                        "decorators": [],
                        "name": "ns",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 832,
                      "end": 833,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 836,
                    "end": 837,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
