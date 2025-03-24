__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 609,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 41,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 99,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 99,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 99,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 93,
                    "argument": {
                      "type": "Literal",
                      "start": 90,
                      "end": 92,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 66,
                  "end": 72
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 140,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 138,
                    "argument": {
                      "type": "Literal",
                      "start": 136,
                      "end": 137,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 171,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 171,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 171,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "type": "ClassDeclaration",
      "start": 208,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 221,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 230,
        "end": 234,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 402,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 241,
            "end": 266,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 265,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 259,
                "end": 265
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 272,
            "end": 326,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 289,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 326,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 300,
                "end": 326,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 310,
                    "end": 320,
                    "argument": {
                      "type": "Literal",
                      "start": 317,
                      "end": 319,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 291,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 293,
                  "end": 299
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 332,
            "end": 368,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 368,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 355,
                "end": 368,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 357,
                    "end": 366,
                    "argument": {
                      "type": "Literal",
                      "start": 364,
                      "end": 365,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 373,
            "end": 400,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 393,
              "end": 400,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 397,
                "end": 400,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
      "type": "VariableDeclaration",
      "start": 404,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 412,
            "end": 418,
            "object": {
              "type": "Identifier",
              "start": 412,
              "end": 416,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "name": "x",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 444,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 432,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 435,
            "end": 444,
            "object": {
              "type": "Identifier",
              "start": 435,
              "end": 442,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "name": "x",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 462,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 465,
            "end": 474,
            "callee": {
              "type": "MemberExpression",
              "start": 465,
              "end": 472,
              "object": {
                "type": "Identifier",
                "start": 465,
                "end": 469,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 472,
                "name": "fn",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 482,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 503,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 491,
            "end": 503,
            "callee": {
              "type": "MemberExpression",
              "start": 491,
              "end": 501,
              "object": {
                "type": "Identifier",
                "start": 491,
                "end": 498,
                "name": "Derived",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 499,
                "end": 501,
                "name": "fn",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 515,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 530,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 521,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 524,
            "end": 530,
            "object": {
              "type": "Identifier",
              "start": 524,
              "end": 528,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
              "name": "a",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 538,
      "end": 549,
      "expression": {
        "type": "AssignmentExpression",
        "start": 538,
        "end": 548,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 538,
          "end": 544,
          "object": {
            "type": "Identifier",
            "start": 538,
            "end": 542,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 547,
          "end": 548,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 557,
      "end": 576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 575,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 566,
            "end": 575,
            "object": {
              "type": "Identifier",
              "start": 566,
              "end": 573,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 574,
              "end": 575,
              "name": "a",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 586,
      "end": 600,
      "expression": {
        "type": "AssignmentExpression",
        "start": 586,
        "end": 599,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 586,
          "end": 595,
          "object": {
            "type": "Identifier",
            "start": 586,
            "end": 593,
            "name": "Derived",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 594,
            "end": 595,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 598,
          "end": 599,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
