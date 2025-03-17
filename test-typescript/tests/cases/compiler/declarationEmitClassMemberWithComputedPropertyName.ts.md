__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 795,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 19,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 17,
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
      "start": 21,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 32,
            "end": 46,
            "expression": {
              "type": "Literal",
              "start": 32,
              "end": 37,
              "raw": "'foo'",
              "value": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 46,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 60,
            "end": 68,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
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
      "start": 70,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "k4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 81,
            "end": 96,
            "expression": {
              "type": "Literal",
              "start": 81,
              "end": 87,
              "raw": "'prop'",
              "value": "prop"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 96,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 96,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 429,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 429,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 162,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 137,
                "end": 162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 147,
                    "end": 156,
                    "argument": {
                      "type": "Literal",
                      "start": 154,
                      "end": 155,
                      "raw": "1",
                      "value": 1
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
                "start": 128,
                "end": 136,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 130,
                  "end": 136
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 208,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 170,
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 208,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 208,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 192,
                    "end": 202,
                    "argument": {
                      "type": "Literal",
                      "start": 199,
                      "end": 201,
                      "raw": "\"\"",
                      "value": ""
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
                "start": 173,
                "end": 181,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 175,
                  "end": 181
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 253,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 224,
              "decorators": [],
              "name": "k2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 225,
              "end": 253,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 228,
                "end": 253,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 238,
                    "end": 247,
                    "argument": {
                      "type": "Literal",
                      "start": 245,
                      "end": 246,
                      "raw": "1",
                      "value": 1
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
            "type": "MethodDefinition",
            "start": 258,
            "end": 291,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 261,
              "decorators": [],
              "name": "k2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 291,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 265,
                "end": 291,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 275,
                    "end": 285,
                    "argument": {
                      "type": "Literal",
                      "start": 282,
                      "end": 284,
                      "raw": "\"\"",
                      "value": ""
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
            "type": "MethodDefinition",
            "start": 297,
            "end": 311,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 306,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 311,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 311,
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
            "type": "MethodDefinition",
            "start": 316,
            "end": 323,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 318,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 323,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 323,
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
            "type": "PropertyDefinition",
            "start": 329,
            "end": 345,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 339,
              "decorators": [],
              "name": "k3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 343,
              "end": 344,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 350,
            "end": 359,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 353,
              "decorators": [],
              "name": "k3",
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
              "start": 357,
              "end": 358,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 381,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 375,
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 379,
              "end": 380,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 386,
            "end": 395,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 389,
              "decorators": [],
              "name": "k4",
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
              "start": 393,
              "end": 394,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 401,
            "end": 415,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 410,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 413,
              "end": 414,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 420,
            "end": 427,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "decorators": [],
              "name": "p1",
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
              "start": 425,
              "end": 426,
              "raw": "4",
              "value": 4
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 431,
      "end": 457,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 438,
        "end": 457,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 444,
            "end": 456,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 444,
              "end": 446,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 449,
              "end": 456,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 453,
                "end": 455,
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 458,
      "end": 490,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 465,
        "end": 490,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 471,
            "end": 489,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 471,
              "end": 473,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 476,
              "end": 489,
              "computed": true,
              "object": {
                "type": "NewExpression",
                "start": 476,
                "end": 485,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 483,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 486,
                "end": 488,
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 492,
      "end": 518,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 499,
        "end": 518,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 505,
            "end": 517,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 510,
              "end": 517,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 510,
                "end": 513,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 514,
                "end": 516,
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 519,
      "end": 551,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 526,
        "end": 551,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 532,
            "end": 550,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 532,
              "end": 534,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 537,
              "end": 550,
              "computed": true,
              "object": {
                "type": "NewExpression",
                "start": 537,
                "end": 546,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 547,
                "end": 549,
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 553,
      "end": 578,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 560,
        "end": 578,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 566,
            "end": 577,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 566,
              "end": 568,
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 571,
              "end": 577,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 571,
                "end": 574,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 575,
                "end": 577,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 579,
      "end": 610,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 586,
        "end": 610,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 592,
            "end": 609,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 592,
              "end": 594,
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 597,
              "end": 609,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 597,
                "end": 606,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 604,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 607,
                "end": 609,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 612,
      "end": 638,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 619,
        "end": 638,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 625,
            "end": 637,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 625,
              "end": 627,
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 630,
              "end": 637,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 630,
                "end": 633,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 634,
                "end": 636,
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 639,
      "end": 671,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 646,
        "end": 671,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 652,
            "end": 670,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 652,
              "end": 654,
              "decorators": [],
              "name": "t8",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 657,
              "end": 670,
              "computed": true,
              "object": {
                "type": "NewExpression",
                "start": 657,
                "end": 666,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 664,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 667,
                "end": 669,
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 673,
      "end": 699,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 680,
        "end": 699,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 686,
            "end": 698,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 686,
              "end": 688,
              "decorators": [],
              "name": "t9",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 691,
              "end": 698,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 691,
                "end": 694,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 695,
                "end": 697,
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 700,
      "end": 733,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 707,
        "end": 733,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 713,
            "end": 732,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 713,
              "end": 716,
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 719,
              "end": 732,
              "computed": true,
              "object": {
                "type": "NewExpression",
                "start": 719,
                "end": 728,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 726,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 729,
                "end": 731,
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 735,
      "end": 761,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 742,
        "end": 761,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 748,
            "end": 760,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 748,
              "end": 751,
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 754,
              "end": 760,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 754,
                "end": 757,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 758,
                "end": 760,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 762,
      "end": 794,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 769,
        "end": 794,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 775,
            "end": 793,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 775,
              "end": 778,
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 781,
              "end": 793,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 781,
                "end": 790,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 788,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 791,
                "end": 793,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              }
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
