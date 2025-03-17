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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "k1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 19,
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 17,
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
      "start": 21,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "name": "k2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 32,
            "end": 46,
            "expression": {
              "type": "Literal",
              "start": 32,
              "end": 37,
              "value": "foo",
              "raw": "'foo'"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 46,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "name": "k3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 60,
            "end": 68,
            "callee": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
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
      "start": 70,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "name": "k4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 81,
            "end": 96,
            "expression": {
              "type": "Literal",
              "start": 81,
              "end": 87,
              "value": "prop",
              "raw": "'prop'"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 96,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 96,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 429,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 162,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "k1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 162,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 128,
                "end": 136,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 130,
                  "end": 136
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 208,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 170,
              "name": "k1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 208,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 173,
                "end": 181,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 175,
                  "end": 181
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 214,
            "end": 253,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 224,
              "name": "k2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 225,
              "end": 253,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
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
            "start": 258,
            "end": 291,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 261,
              "name": "k2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "\"\""
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
            "start": 297,
            "end": 311,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 306,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 311,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 311,
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
            "start": 316,
            "end": 323,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 318,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 323,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 323,
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
            "type": "PropertyDefinition",
            "start": 329,
            "end": 345,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 339,
              "name": "k3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 343,
              "end": 344,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 350,
            "end": 359,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 353,
              "name": "k3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 357,
              "end": 358,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 381,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 375,
              "name": "k4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 379,
              "end": 380,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 386,
            "end": 395,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 389,
              "name": "k4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 393,
              "end": 394,
              "value": 2,
              "raw": "2"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 401,
            "end": 415,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 410,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 413,
              "end": 414,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 420,
            "end": 427,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 425,
              "end": 426,
              "value": 4,
              "raw": "4"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 431,
      "end": 457,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 438,
        "end": 457,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 444,
            "end": 456,
            "id": {
              "type": "Identifier",
              "start": 444,
              "end": 446,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 449,
              "end": 456,
              "object": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 453,
                "end": 455,
                "name": "k1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 458,
      "end": 490,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 465,
        "end": 490,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 471,
            "end": 489,
            "id": {
              "type": "Identifier",
              "start": 471,
              "end": 473,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 476,
              "end": 489,
              "object": {
                "type": "NewExpression",
                "start": 476,
                "end": 485,
                "callee": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 483,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 486,
                "end": 488,
                "name": "k1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 492,
      "end": 518,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 499,
        "end": 518,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 505,
            "end": 517,
            "id": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 510,
              "end": 517,
              "object": {
                "type": "Identifier",
                "start": 510,
                "end": 513,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 514,
                "end": 516,
                "name": "k2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 519,
      "end": 551,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 526,
        "end": 551,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 532,
            "end": 550,
            "id": {
              "type": "Identifier",
              "start": 532,
              "end": 534,
              "name": "t4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 537,
              "end": 550,
              "object": {
                "type": "NewExpression",
                "start": 537,
                "end": 546,
                "callee": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 547,
                "end": 549,
                "name": "k2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 553,
      "end": 578,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 560,
        "end": 578,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 566,
            "end": 577,
            "id": {
              "type": "Identifier",
              "start": 566,
              "end": 568,
              "name": "t5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 571,
              "end": 577,
              "object": {
                "type": "Identifier",
                "start": 571,
                "end": 574,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 575,
                "end": 577,
                "name": "m1",
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
      "start": 579,
      "end": 610,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 586,
        "end": 610,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 592,
            "end": 609,
            "id": {
              "type": "Identifier",
              "start": 592,
              "end": 594,
              "name": "t6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 597,
              "end": 609,
              "object": {
                "type": "NewExpression",
                "start": 597,
                "end": 606,
                "callee": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 604,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 607,
                "end": 609,
                "name": "m1",
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
      "start": 612,
      "end": 638,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 619,
        "end": 638,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 625,
            "end": 637,
            "id": {
              "type": "Identifier",
              "start": 625,
              "end": 627,
              "name": "t7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 630,
              "end": 637,
              "object": {
                "type": "Identifier",
                "start": 630,
                "end": 633,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 634,
                "end": 636,
                "name": "k3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 639,
      "end": 671,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 646,
        "end": 671,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 652,
            "end": 670,
            "id": {
              "type": "Identifier",
              "start": 652,
              "end": 654,
              "name": "t8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 657,
              "end": 670,
              "object": {
                "type": "NewExpression",
                "start": 657,
                "end": 666,
                "callee": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 664,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 667,
                "end": 669,
                "name": "k3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 673,
      "end": 699,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 680,
        "end": 699,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 686,
            "end": 698,
            "id": {
              "type": "Identifier",
              "start": 686,
              "end": 688,
              "name": "t9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 691,
              "end": 698,
              "object": {
                "type": "Identifier",
                "start": 691,
                "end": 694,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 695,
                "end": 697,
                "name": "k4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 700,
      "end": 733,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 707,
        "end": 733,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 713,
            "end": 732,
            "id": {
              "type": "Identifier",
              "start": 713,
              "end": 716,
              "name": "t10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 719,
              "end": 732,
              "object": {
                "type": "NewExpression",
                "start": 719,
                "end": 728,
                "callee": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 726,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 729,
                "end": 731,
                "name": "k4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
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
      "start": 735,
      "end": 761,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 742,
        "end": 761,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 748,
            "end": 760,
            "id": {
              "type": "Identifier",
              "start": 748,
              "end": 751,
              "name": "t11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 754,
              "end": 760,
              "object": {
                "type": "Identifier",
                "start": 754,
                "end": 757,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 758,
                "end": 760,
                "name": "p1",
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
      "start": 762,
      "end": 794,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 769,
        "end": 794,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 775,
            "end": 793,
            "id": {
              "type": "Identifier",
              "start": 775,
              "end": 778,
              "name": "t12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 781,
              "end": 793,
              "object": {
                "type": "NewExpression",
                "start": 781,
                "end": 790,
                "callee": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 788,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 791,
                "end": 793,
                "name": "p1",
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
