__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 895,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 55,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 67,
        "name": "Class",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 106,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 104,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 79,
          "end": 80,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 108,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 122,
        "name": "SubClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 136,
        "name": "Class",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 156,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "name": "foo",
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
              "start": 146,
              "end": 155,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 148,
                "end": 155
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 187,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 172,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 187,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 187,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 185,
                    "expression": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 184,
                      "callee": {
                        "type": "Super",
                        "start": 177,
                        "end": 182
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "start": 191,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 254,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 230,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 221,
              "name": "foo",
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
              "start": 221,
              "end": 230,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 223,
                "end": 230
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 252,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 246,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 246,
              "end": 252,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 249,
                "end": 252,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 210,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 256,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 266,
        "name": "SubD",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 275,
        "end": 276,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 277,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 283,
            "end": 294,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 286,
              "name": "bar",
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
              "start": 286,
              "end": 294,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 288,
                "end": 294
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 299,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 310,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 310,
              "end": 337,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 337,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 323,
                      "end": 330,
                      "callee": {
                        "type": "Super",
                        "start": 323,
                        "end": 328
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "FunctionDeclaration",
      "start": 342,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 353,
        "name": "d0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 371,
          "end": 395,
          "left": {
            "type": "ObjectPattern",
            "start": 371,
            "end": 374,
            "properties": [
              {
                "type": "Property",
                "start": 372,
                "end": 373,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 377,
            "end": 395,
            "properties": [
              {
                "type": "Property",
                "start": 379,
                "end": 393,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 382,
                  "end": 393,
                  "callee": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 391,
                    "name": "Class",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 397,
        "end": 400,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 353,
        "end": 370,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 354,
            "end": 369,
            "name": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 364,
              "end": 369,
              "typeName": {
                "type": "Identifier",
                "start": 364,
                "end": 369,
                "name": "Class",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 444,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 412,
        "name": "d1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 426,
          "end": 439,
          "properties": [
            {
              "type": "Property",
              "start": 427,
              "end": 428,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 429,
            "end": 439,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 431,
              "end": 439,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 433,
                  "end": 437,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 434,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 436,
                      "end": 437,
                      "typeName": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 437,
                        "name": "F",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 441,
        "end": 444,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 412,
        "end": 425,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 413,
            "end": 424,
            "name": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 423,
              "end": 424,
              "typeName": {
                "type": "Identifier",
                "start": 423,
                "end": 424,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 456,
        "name": "d2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 474,
          "end": 491,
          "properties": [
            {
              "type": "Property",
              "start": 475,
              "end": 476,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 491,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 479,
              "end": 491,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 481,
                  "end": 489,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 482,
                    "end": 489,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 484,
                      "end": 489,
                      "typeName": {
                        "type": "Identifier",
                        "start": 484,
                        "end": 489,
                        "name": "Class",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 493,
        "end": 496,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 456,
        "end": 473,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 457,
            "end": 472,
            "name": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 467,
              "end": 472,
              "typeName": {
                "type": "Identifier",
                "start": 467,
                "end": 472,
                "name": "Class",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 497,
      "end": 540,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 508,
        "name": "d3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 522,
          "end": 535,
          "properties": [
            {
              "type": "Property",
              "start": 523,
              "end": 524,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 525,
            "end": 535,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 527,
              "end": 535,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 529,
                  "end": 533,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 530,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 533,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 532,
                      "end": 533,
                      "typeName": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 533,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 537,
        "end": 540,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 508,
        "end": 521,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 509,
            "end": 520,
            "name": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 519,
              "end": 520,
              "typeName": {
                "type": "Identifier",
                "start": 519,
                "end": 520,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 541,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 552,
        "name": "d4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 566,
          "end": 586,
          "left": {
            "type": "ObjectPattern",
            "start": 566,
            "end": 569,
            "properties": [
              {
                "type": "Property",
                "start": 567,
                "end": 568,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 572,
            "end": 586,
            "properties": [
              {
                "type": "Property",
                "start": 574,
                "end": 584,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 575,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 577,
                  "end": 584,
                  "callee": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 588,
        "end": 591,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 552,
        "end": 565,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 553,
            "end": 564,
            "name": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 563,
              "end": 564,
              "typeName": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 593,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 614,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 600,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 603,
            "end": 614,
            "callee": {
              "type": "Identifier",
              "start": 607,
              "end": 612,
              "name": "Class",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 616,
      "end": 629,
      "expression": {
        "type": "CallExpression",
        "start": 616,
        "end": 628,
        "callee": {
          "type": "Identifier",
          "start": 616,
          "end": 618,
          "name": "d0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 619,
            "end": 627,
            "properties": [
              {
                "type": "Property",
                "start": 621,
                "end": 625,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 624,
                  "end": 625,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 630,
      "end": 644,
      "expression": {
        "type": "CallExpression",
        "start": 630,
        "end": 643,
        "callee": {
          "type": "Identifier",
          "start": 630,
          "end": 632,
          "name": "d0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 633,
            "end": 642,
            "properties": [
              {
                "type": "Property",
                "start": 635,
                "end": 640,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 636,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 638,
                  "end": 640,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 665,
      "expression": {
        "type": "CallExpression",
        "start": 645,
        "end": 664,
        "callee": {
          "type": "Identifier",
          "start": 645,
          "end": 647,
          "name": "d0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 648,
            "end": 663,
            "properties": [
              {
                "type": "Property",
                "start": 650,
                "end": 661,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 651,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 653,
                  "end": 661,
                  "value": "string",
                  "raw": "\"string\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 667,
      "end": 690,
      "expression": {
        "type": "CallExpression",
        "start": 667,
        "end": 689,
        "callee": {
          "type": "Identifier",
          "start": 667,
          "end": 669,
          "name": "d1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 670,
            "end": 688,
            "properties": [
              {
                "type": "Property",
                "start": 672,
                "end": 686,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 675,
                  "end": 686,
                  "callee": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 684,
                    "name": "Class",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 691,
      "end": 705,
      "expression": {
        "type": "CallExpression",
        "start": 691,
        "end": 704,
        "callee": {
          "type": "Identifier",
          "start": 691,
          "end": 693,
          "name": "d1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 694,
            "end": 703,
            "properties": [
              {
                "type": "Property",
                "start": 696,
                "end": 701,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 697,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 699,
                  "end": 701,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 706,
      "end": 726,
      "expression": {
        "type": "CallExpression",
        "start": 706,
        "end": 725,
        "callee": {
          "type": "Identifier",
          "start": 706,
          "end": 708,
          "name": "d1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 709,
            "end": 724,
            "properties": [
              {
                "type": "Property",
                "start": 711,
                "end": 722,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 712,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 714,
                  "end": 722,
                  "value": "string",
                  "raw": "\"string\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 728,
      "end": 754,
      "expression": {
        "type": "CallExpression",
        "start": 728,
        "end": 753,
        "callee": {
          "type": "Identifier",
          "start": 728,
          "end": 730,
          "name": "d2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 731,
            "end": 752,
            "properties": [
              {
                "type": "Property",
                "start": 733,
                "end": 750,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 734,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 736,
                  "end": 750,
                  "callee": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 748,
                    "name": "SubClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 755,
      "end": 769,
      "expression": {
        "type": "CallExpression",
        "start": 755,
        "end": 768,
        "callee": {
          "type": "Identifier",
          "start": 755,
          "end": 757,
          "name": "d2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 758,
            "end": 767,
            "properties": [
              {
                "type": "Property",
                "start": 760,
                "end": 765,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 761,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 763,
                  "end": 765,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 771,
      "end": 793,
      "expression": {
        "type": "CallExpression",
        "start": 771,
        "end": 792,
        "callee": {
          "type": "Identifier",
          "start": 771,
          "end": 773,
          "name": "d3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 774,
            "end": 791,
            "properties": [
              {
                "type": "Property",
                "start": 776,
                "end": 789,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 779,
                  "end": 789,
                  "callee": {
                    "type": "Identifier",
                    "start": 783,
                    "end": 787,
                    "name": "SubD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 820,
      "expression": {
        "type": "CallExpression",
        "start": 794,
        "end": 819,
        "callee": {
          "type": "Identifier",
          "start": 794,
          "end": 796,
          "name": "d3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 797,
            "end": 818,
            "properties": [
              {
                "type": "Property",
                "start": 799,
                "end": 816,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 799,
                  "end": 800,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 802,
                  "end": 816,
                  "callee": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 814,
                    "name": "SubClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 830,
      "end": 853,
      "expression": {
        "type": "CallExpression",
        "start": 830,
        "end": 852,
        "callee": {
          "type": "Identifier",
          "start": 830,
          "end": 832,
          "name": "d3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 833,
            "end": 851,
            "properties": [
              {
                "type": "Property",
                "start": 835,
                "end": 849,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 838,
                  "end": 849,
                  "callee": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 847,
                    "name": "Class",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 854,
      "end": 861,
      "expression": {
        "type": "CallExpression",
        "start": 854,
        "end": 860,
        "callee": {
          "type": "Identifier",
          "start": 854,
          "end": 856,
          "name": "d3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 857,
            "end": 859,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 862,
      "end": 875,
      "expression": {
        "type": "CallExpression",
        "start": 862,
        "end": 874,
        "callee": {
          "type": "Identifier",
          "start": 862,
          "end": 864,
          "name": "d3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 865,
            "end": 873,
            "properties": [
              {
                "type": "Property",
                "start": 867,
                "end": 871,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 867,
                  "end": 868,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 870,
                  "end": 871,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 895,
      "expression": {
        "type": "CallExpression",
        "start": 876,
        "end": 894,
        "callee": {
          "type": "Identifier",
          "start": 876,
          "end": 878,
          "name": "d3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 879,
            "end": 893,
            "properties": [
              {
                "type": "Property",
                "start": 881,
                "end": 891,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 882,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 884,
                  "end": 891,
                  "value": "world",
                  "raw": "\"world\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
