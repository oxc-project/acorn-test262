__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 886,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
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
      "type": "ExpressionStatement",
      "start": 20,
      "end": 28,
      "expression": {
        "type": "AwaitExpression",
        "start": 20,
        "end": 27,
        "argument": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 75,
      "expression": {
        "type": "AwaitExpression",
        "start": 65,
        "end": 74,
        "argument": {
          "type": "ArrayExpression",
          "start": 71,
          "end": 74,
          "elements": [
            {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 89,
      "expression": {
        "type": "AwaitExpression",
        "start": 76,
        "end": 88,
        "argument": {
          "type": "ArrayExpression",
          "start": 82,
          "end": 88,
          "elements": [
            {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 116,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 136,
        "end": 144,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 138,
          "end": 144
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 156,
      "expression": {
        "type": "AwaitExpression",
        "start": 146,
        "end": 155,
        "argument": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 172,
      "expression": {
        "type": "AwaitExpression",
        "start": 157,
        "end": 171,
        "argument": {
          "type": "SequenceExpression",
          "start": 164,
          "end": 170,
          "expressions": [
            {
              "type": "CallExpression",
              "start": 164,
              "end": 167,
              "callee": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 191,
      "expression": {
        "type": "AwaitExpression",
        "start": 173,
        "end": 190,
        "argument": {
          "type": "TSTypeAssertion",
          "start": 179,
          "end": 190,
          "expression": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 180,
            "end": 186
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 215,
      "expression": {
        "type": "AwaitExpression",
        "start": 192,
        "end": 214,
        "argument": {
          "type": "TSTypeAssertion",
          "start": 198,
          "end": 214,
          "expression": {
            "type": "SequenceExpression",
            "start": 207,
            "end": 213,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 207,
                "end": 210,
                "callee": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 199,
            "end": 205
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 262,
      "expression": {
        "type": "AwaitExpression",
        "start": 253,
        "end": 261,
        "argument": {
          "type": "TemplateLiteral",
          "start": 259,
          "end": 261,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 259,
              "end": 261,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 281,
      "expression": {
        "type": "AwaitExpression",
        "start": 263,
        "end": 280,
        "argument": {
          "type": "TSTypeAssertion",
          "start": 269,
          "end": 280,
          "expression": {
            "type": "TemplateLiteral",
            "start": 278,
            "end": 280,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 278,
                "end": 280,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 270,
            "end": 276
          }
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 312,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 339,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 332,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 337,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 337,
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
      "start": 340,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 348,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 349,
        "end": 407,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 380,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 364,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 364,
              "end": 380,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 380,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 369,
                    "end": 378,
                    "argument": {
                      "type": "Literal",
                      "start": 376,
                      "end": 377,
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
            "start": 385,
            "end": 405,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 394,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 394,
              "end": 405,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 395,
                  "end": 400,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 402,
                "end": 405,
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
      "start": 408,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 416,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 417,
        "end": 435,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 423,
            "end": 433,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 428,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 431,
              "end": 432,
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
      "type": "ExpressionStatement",
      "start": 436,
      "end": 457,
      "expression": {
        "type": "ObjectExpression",
        "start": 437,
        "end": 455,
        "properties": [
          {
            "type": "Property",
            "start": 443,
            "end": 453,
            "method": true,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 448,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 448,
              "end": 453,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 451,
                "end": 453,
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 519,
      "expression": {
        "type": "ObjectExpression",
        "start": 459,
        "end": 517,
        "properties": [
          {
            "type": "Property",
            "start": 465,
            "end": 489,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 469,
              "end": 474,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 474,
              "end": 489,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 477,
                "end": 489,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 479,
                    "end": 487,
                    "argument": {
                      "type": "Literal",
                      "start": 486,
                      "end": 487,
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
            "kind": "get",
            "optional": false
          },
          {
            "type": "Property",
            "start": 495,
            "end": 515,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 504,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 504,
              "end": 515,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 505,
                  "end": 510,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 512,
                "end": 515,
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 520,
      "end": 539,
      "expression": {
        "type": "ObjectExpression",
        "start": 521,
        "end": 537,
        "properties": [
          {
            "type": "Property",
            "start": 527,
            "end": 535,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 532,
              "name": "await",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 534,
              "end": 535,
              "value": 1,
              "raw": "1"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 578,
      "end": 597,
      "expression": {
        "type": "MemberExpression",
        "start": 578,
        "end": 596,
        "object": {
          "type": "MemberExpression",
          "start": 578,
          "end": 590,
          "object": {
            "type": "Identifier",
            "start": 578,
            "end": 580,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 581,
            "end": 590,
            "name": "prototype",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 591,
          "end": 596,
          "name": "await",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 644,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 644,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 639,
              "end": 644,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 641,
                "end": 644
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 646,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 666,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 667,
        "end": 670,
        "body": []
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 646,
          "end": 658,
          "expression": {
            "type": "AwaitExpression",
            "start": 648,
            "end": 657,
            "argument": {
              "type": "Identifier",
              "start": 654,
              "end": 657,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ImportDeclaration",
      "start": 707,
      "end": 749,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 716,
          "end": 731,
          "imported": {
            "type": "Identifier",
            "start": 716,
            "end": 721,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 725,
            "end": 731,
            "name": "_await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 739,
        "end": 748,
        "value": "./other",
        "raw": "\"./other\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ThrowStatement",
      "start": 781,
      "end": 799,
      "argument": {
        "type": "AwaitExpression",
        "start": 787,
        "end": 798,
        "argument": {
          "type": "Literal",
          "start": 797,
          "end": 798,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 817,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 825,
            "end": 836,
            "argument": {
              "type": "Literal",
              "start": 835,
              "end": 836,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 873,
      "end": 885,
      "expression": {
        "type": "AwaitExpression",
        "start": 873,
        "end": 884,
        "argument": {
          "type": "Literal",
          "start": 883,
          "end": 884,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
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
  "end": 175,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "name": "_await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 81,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 63,
          "end": 78,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 69,
            "name": "_await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 73,
            "end": 78,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 111,
            "end": 130,
            "elements": [
              {
                "type": "CallExpression",
                "start": 112,
                "end": 129,
                "callee": {
                  "type": "MemberExpression",
                  "start": 112,
                  "end": 127,
                  "object": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 119,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 127,
                    "name": "resolve",
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
      "type": "ForOfStatement",
      "start": 133,
      "end": 174,
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "start": 144,
        "end": 154,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 150,
            "end": 154,
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 154,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 158,
        "end": 161,
        "name": "arr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 174,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 167,
            "end": 172,
            "expression": {
              "type": "Identifier",
              "start": 167,
              "end": 171,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
