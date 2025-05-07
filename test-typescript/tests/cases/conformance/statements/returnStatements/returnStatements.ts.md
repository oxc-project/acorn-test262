__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 660,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 73,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 73,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 71,
            "argument": {
              "type": "Literal",
              "start": 69,
              "end": 70,
              "raw": "1",
              "value": 1,
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
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 59,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 111,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 111,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 99,
            "end": 109,
            "argument": {
              "type": "Literal",
              "start": 106,
              "end": 108,
              "raw": "''",
              "value": "",
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
        "start": 83,
        "end": 86,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 96,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 90,
          "end": 96
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 154,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 154,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 152,
            "argument": {
              "type": "Identifier",
              "start": 142,
              "end": 151,
              "decorators": [],
              "name": "undefined",
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
        "start": 121,
        "end": 124,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 132,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 128,
          "end": 132
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 187,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 176,
        "end": 187,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 185,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 169,
        "end": 175,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 171,
          "end": 175
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 228,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 214,
            "end": 226,
            "argument": {
              "type": "Literal",
              "start": 221,
              "end": 225,
              "raw": "true",
              "value": true,
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
        "start": 197,
        "end": 200,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 202,
        "end": 211,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 204,
          "end": 211
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 229,
      "end": 274,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 250,
        "end": 274,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 252,
            "end": 272,
            "argument": {
              "type": "NewExpression",
              "start": 259,
              "end": 271,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 268,
                  "end": 270,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 263,
                "end": 267,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 241,
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 243,
        "end": 249,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 245,
          "end": 249,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 311,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 295,
        "end": 311,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 297,
            "end": 309,
            "argument": {
              "type": "Literal",
              "start": 304,
              "end": 308,
              "raw": "null",
              "value": null,
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
        "start": 284,
        "end": 287,
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 289,
        "end": 294,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 291,
          "end": 294
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 312,
      "end": 343,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 332,
        "end": 343,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 334,
            "end": 341,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 324,
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 326,
        "end": 331,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 328,
          "end": 331
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 378,
      "end": 404,
      "body": {
        "type": "TSInterfaceBody",
        "start": 390,
        "end": 404,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 392,
            "end": 402,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 394,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 402,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 396,
                "end": 402
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 405,
      "end": 462,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 426,
        "end": 462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 432,
            "end": 443,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 434,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 434,
              "end": 442,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 436,
                "end": 442
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 448,
            "end": 460,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 448,
              "end": 455,
              "decorators": [],
              "name": "dispose",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 455,
              "end": 460,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 458,
                "end": 460,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 412,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 424,
          "end": 425,
          "expression": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 463,
      "end": 502,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 481,
        "end": 502,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 487,
            "end": 500,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 491,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 499,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 493,
                "end": 499
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 470,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 479,
        "end": 480,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 503,
      "end": 544,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 522,
        "end": 544,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 524,
            "end": 542,
            "argument": {
              "type": "ObjectExpression",
              "start": 531,
              "end": 541,
              "properties": [
                {
                  "type": "Property",
                  "start": 533,
                  "end": 539,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 535,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 537,
                    "end": 539,
                    "raw": "12",
                    "value": 12,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 516,
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 518,
        "end": 521,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 520,
          "end": 521,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 520,
            "end": 521,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 547,
      "end": 585,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 566,
        "end": 585,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 568,
            "end": 583,
            "argument": {
              "type": "NewExpression",
              "start": 575,
              "end": 582,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 560,
        "decorators": [],
        "name": "fn11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 562,
        "end": 565,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 564,
          "end": 565,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 564,
            "end": 565,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 586,
      "end": 624,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 605,
        "end": 624,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 607,
            "end": 622,
            "argument": {
              "type": "NewExpression",
              "start": 614,
              "end": 621,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 599,
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 601,
        "end": 604,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 603,
          "end": 604,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 603,
            "end": 604,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 625,
      "end": 660,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 644,
        "end": 660,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 646,
            "end": 658,
            "argument": {
              "type": "Literal",
              "start": 653,
              "end": 657,
              "raw": "null",
              "value": null,
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
        "start": 634,
        "end": 638,
        "decorators": [],
        "name": "fn13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 640,
        "end": 643,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 642,
          "end": 643,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 642,
            "end": 643,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
