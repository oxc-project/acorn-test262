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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 136,
        "end": 144,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 138,
          "end": 144
        }
      },
      "body": null,
      "expression": false
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 180,
            "end": 186
          },
          "expression": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 199,
            "end": 205
          },
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
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ]
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
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 259,
              "end": 261,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "expressions": []
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
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 270,
            "end": 276
          },
          "expression": {
            "type": "TemplateLiteral",
            "start": 278,
            "end": 280,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 278,
                "end": 280,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 312,
      "end": 339,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 320,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 339,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 337,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 332,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 337,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 337,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 340,
      "end": 407,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 348,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 349,
        "end": 407,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 355,
            "end": 380,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 364,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 364,
              "end": 380,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 385,
            "end": 405,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 394,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 394,
              "end": 405,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 395,
                  "end": 400,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 402,
                "end": 405,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 408,
      "end": 435,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 416,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 417,
        "end": 435,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 423,
            "end": 433,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 428,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 431,
              "end": 432,
              "value": 1,
              "raw": "1"
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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 448,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 448,
              "end": 453,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 451,
                "end": 453,
                "body": []
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
            "kind": "get",
            "key": {
              "type": "Identifier",
              "start": 469,
              "end": 474,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 474,
              "end": 489,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 495,
            "end": 515,
            "kind": "set",
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 504,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 504,
              "end": 515,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 505,
                  "end": 510,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 512,
                "end": 515,
                "body": []
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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 532,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 534,
              "end": 535,
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
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 581,
            "end": 590,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 591,
          "end": 596,
          "decorators": [],
          "name": "await",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 645,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 644,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 644,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 639,
              "end": 644,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 641,
                "end": 644
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 646,
      "end": 670,
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
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 666,
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
        "start": 667,
        "end": 670,
        "body": []
      },
      "abstract": false,
      "declare": false
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
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 725,
            "end": 731,
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
  "end": 174,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 73,
            "end": 78,
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 131,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 127,
                    "decorators": [],
                    "name": "resolve",
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
            ]
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 150,
            "end": 154,
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 154,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 158,
        "end": 161,
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
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
