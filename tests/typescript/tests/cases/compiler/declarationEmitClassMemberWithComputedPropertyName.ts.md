__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 794,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
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
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 17,
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
      "type": "VariableDeclaration",
      "start": 21,
      "end": 47,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 46,
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
      "type": "VariableDeclaration",
      "start": 49,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 68,
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
            "callee": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
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
      "type": "VariableDeclaration",
      "start": 70,
      "end": 97,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 96,
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
      "type": "ClassDeclaration",
      "start": 99,
      "end": 429,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 429,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 115,
            "end": 162,
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
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 162,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 208,
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
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 208,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
            "start": 214,
            "end": 253,
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
            "value": {
              "type": "FunctionExpression",
              "start": 225,
              "end": 253,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 258,
            "end": 291,
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
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 291,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
            "start": 297,
            "end": 311,
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
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 311,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 311,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 316,
            "end": 323,
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
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 323,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 323,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 329,
            "end": 345,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 339,
              "decorators": [],
              "name": "k3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 343,
              "end": 344,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
            "start": 350,
            "end": 359,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 353,
              "decorators": [],
              "name": "k3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 357,
              "end": 358,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 381,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 375,
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 379,
              "end": 380,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
            "start": 386,
            "end": 395,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 389,
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 393,
              "end": 394,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 401,
            "end": 415,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 410,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 413,
              "end": 414,
              "value": 3,
              "raw": "3"
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
            "start": 420,
            "end": 427,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 425,
              "end": 426,
              "value": 4,
              "raw": "4"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 431,
      "end": 457,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 438,
        "end": 457,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 444,
            "end": 456,
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
              "object": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 453,
                "end": 455,
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 458,
      "end": 490,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 465,
        "end": 490,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 471,
            "end": 489,
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
              "object": {
                "type": "NewExpression",
                "start": 476,
                "end": 485,
                "callee": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 483,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 486,
                "end": 488,
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 492,
      "end": 518,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 499,
        "end": 518,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 505,
            "end": 517,
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
              "object": {
                "type": "Identifier",
                "start": 510,
                "end": 513,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 514,
                "end": 516,
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 519,
      "end": 551,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 526,
        "end": 551,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 532,
            "end": 550,
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
              "object": {
                "type": "NewExpression",
                "start": 537,
                "end": 546,
                "callee": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 547,
                "end": 549,
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 553,
      "end": 578,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 560,
        "end": 578,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 566,
            "end": 577,
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
              "object": {
                "type": "Identifier",
                "start": 571,
                "end": 574,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 575,
                "end": 577,
                "decorators": [],
                "name": "m1",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 579,
      "end": 610,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 586,
        "end": 610,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 592,
            "end": 609,
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
              "object": {
                "type": "NewExpression",
                "start": 597,
                "end": 606,
                "callee": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 604,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 607,
                "end": 609,
                "decorators": [],
                "name": "m1",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 612,
      "end": 638,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 619,
        "end": 638,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 625,
            "end": 637,
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
              "object": {
                "type": "Identifier",
                "start": 630,
                "end": 633,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 634,
                "end": 636,
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 639,
      "end": 671,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 646,
        "end": 671,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 652,
            "end": 670,
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
              "object": {
                "type": "NewExpression",
                "start": 657,
                "end": 666,
                "callee": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 664,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 667,
                "end": 669,
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 673,
      "end": 699,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 680,
        "end": 699,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 686,
            "end": 698,
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
              "object": {
                "type": "Identifier",
                "start": 691,
                "end": 694,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 695,
                "end": 697,
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 700,
      "end": 733,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 707,
        "end": 733,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 713,
            "end": 732,
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
              "object": {
                "type": "NewExpression",
                "start": 719,
                "end": 728,
                "callee": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 726,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 729,
                "end": 731,
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
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
      "start": 735,
      "end": 761,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 742,
        "end": 761,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 748,
            "end": 760,
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
              "object": {
                "type": "Identifier",
                "start": 754,
                "end": 757,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 758,
                "end": 760,
                "decorators": [],
                "name": "p1",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 762,
      "end": 794,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 769,
        "end": 794,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 775,
            "end": 793,
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
              "object": {
                "type": "NewExpression",
                "start": 781,
                "end": 790,
                "callee": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 788,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 791,
                "end": 793,
                "decorators": [],
                "name": "p1",
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
