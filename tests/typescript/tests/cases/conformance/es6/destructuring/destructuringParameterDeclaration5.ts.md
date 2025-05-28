__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 894,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 54,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 55,
      "end": 105,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 66,
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 78,
          "end": 79,
          "expression": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 103,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 103,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 107,
      "end": 188,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "decorators": [],
        "name": "SubClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 130,
        "end": 135,
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 188,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 142,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 154,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 147,
                "end": 154
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 160,
            "end": 186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 171,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 186,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 174,
                "end": 186,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 176,
                    "end": 184,
                    "expression": {
                      "type": "CallExpression",
                      "start": 176,
                      "end": 183,
                      "callee": {
                        "type": "Super",
                        "start": 176,
                        "end": 181
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 190,
      "end": 253,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 209,
          "end": 210,
          "expression": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 217,
            "end": 229,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 229,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 222,
                "end": 229
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 234,
            "end": 251,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 245,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 251,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 248,
                "end": 251,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 255,
      "end": 338,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 265,
        "decorators": [],
        "name": "SubD",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 338,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 293,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 285,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 293,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 336,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 309,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 309,
              "end": 336,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 312,
                "end": 336,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 322,
                    "end": 330,
                    "expression": {
                      "type": "CallExpression",
                      "start": 322,
                      "end": 329,
                      "callee": {
                        "type": "Super",
                        "start": 322,
                        "end": 327
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "FunctionDeclaration",
      "start": 341,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 352,
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 352,
        "end": 369,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 353,
            "end": 368,
            "name": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 363,
              "end": 368,
              "typeName": {
                "type": "Identifier",
                "start": 363,
                "end": 368,
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 370,
          "end": 394,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 370,
            "end": 373,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 371,
                "end": 372,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 376,
            "end": 394,
            "properties": [
              {
                "type": "Property",
                "start": 378,
                "end": 392,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 381,
                  "end": 392,
                  "callee": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 390,
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 396,
        "end": 399,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 400,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 411,
        "decorators": [],
        "name": "d1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 411,
        "end": 424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 412,
            "end": 423,
            "name": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 423,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "ObjectPattern",
          "start": 425,
          "end": 438,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 426,
              "end": 427,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 438,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 430,
              "end": 438,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 432,
                  "end": 436,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 433,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 435,
                      "end": 436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 440,
        "end": 443,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 444,
      "end": 495,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 455,
        "decorators": [],
        "name": "d2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 455,
        "end": 472,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 456,
            "end": 471,
            "name": {
              "type": "Identifier",
              "start": 456,
              "end": 457,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 466,
              "end": 471,
              "typeName": {
                "type": "Identifier",
                "start": 466,
                "end": 471,
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "ObjectPattern",
          "start": 473,
          "end": 490,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 474,
              "end": 475,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 476,
            "end": 490,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 478,
              "end": 490,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 480,
                  "end": 488,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 488,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 483,
                      "end": 488,
                      "typeName": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 488,
                        "decorators": [],
                        "name": "Class",
                        "optional": false,
                        "typeAnnotation": null
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 492,
        "end": 495,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 496,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 505,
        "end": 507,
        "decorators": [],
        "name": "d3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 507,
        "end": 520,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 508,
            "end": 519,
            "name": {
              "type": "Identifier",
              "start": 508,
              "end": 509,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 518,
              "end": 519,
              "typeName": {
                "type": "Identifier",
                "start": 518,
                "end": 519,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "ObjectPattern",
          "start": 521,
          "end": 534,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 522,
              "end": 523,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 534,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 526,
              "end": 534,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 528,
                  "end": 532,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 529,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 531,
                      "end": 532,
                      "typeName": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 532,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 536,
        "end": 539,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 540,
      "end": 590,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "decorators": [],
        "name": "d4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 551,
        "end": 564,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 552,
            "end": 563,
            "name": {
              "type": "Identifier",
              "start": 552,
              "end": 553,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 562,
              "end": 563,
              "typeName": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 565,
          "end": 585,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 565,
            "end": 568,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 566,
                "end": 567,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 567,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 567,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 571,
            "end": 585,
            "properties": [
              {
                "type": "Property",
                "start": 573,
                "end": 583,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 574,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 576,
                  "end": 583,
                  "callee": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 581,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 587,
        "end": 590,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 592,
      "end": 614,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 613,
          "id": {
            "type": "Identifier",
            "start": 596,
            "end": 599,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 602,
            "end": 613,
            "callee": {
              "type": "Identifier",
              "start": 606,
              "end": 611,
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 615,
      "end": 628,
      "expression": {
        "type": "CallExpression",
        "start": 615,
        "end": 627,
        "callee": {
          "type": "Identifier",
          "start": 615,
          "end": 617,
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 618,
            "end": 626,
            "properties": [
              {
                "type": "Property",
                "start": 620,
                "end": 624,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 620,
                  "end": 621,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 623,
                  "end": 624,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 629,
      "end": 643,
      "expression": {
        "type": "CallExpression",
        "start": 629,
        "end": 642,
        "callee": {
          "type": "Identifier",
          "start": 629,
          "end": 631,
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 632,
            "end": 641,
            "properties": [
              {
                "type": "Property",
                "start": 634,
                "end": 639,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 637,
                  "end": 639,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 664,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 663,
        "callee": {
          "type": "Identifier",
          "start": 644,
          "end": 646,
          "decorators": [],
          "name": "d0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 647,
            "end": 662,
            "properties": [
              {
                "type": "Property",
                "start": 649,
                "end": 660,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 650,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 652,
                  "end": 660,
                  "value": "string",
                  "raw": "\"string\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 666,
      "end": 689,
      "expression": {
        "type": "CallExpression",
        "start": 666,
        "end": 688,
        "callee": {
          "type": "Identifier",
          "start": 666,
          "end": 668,
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 669,
            "end": 687,
            "properties": [
              {
                "type": "Property",
                "start": 671,
                "end": 685,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 672,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 674,
                  "end": 685,
                  "callee": {
                    "type": "Identifier",
                    "start": 678,
                    "end": 683,
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 704,
      "expression": {
        "type": "CallExpression",
        "start": 690,
        "end": 703,
        "callee": {
          "type": "Identifier",
          "start": 690,
          "end": 692,
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 693,
            "end": 702,
            "properties": [
              {
                "type": "Property",
                "start": 695,
                "end": 700,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 696,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 698,
                  "end": 700,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 705,
      "end": 725,
      "expression": {
        "type": "CallExpression",
        "start": 705,
        "end": 724,
        "callee": {
          "type": "Identifier",
          "start": 705,
          "end": 707,
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 708,
            "end": 723,
            "properties": [
              {
                "type": "Property",
                "start": 710,
                "end": 721,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 711,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 713,
                  "end": 721,
                  "value": "string",
                  "raw": "\"string\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 727,
      "end": 753,
      "expression": {
        "type": "CallExpression",
        "start": 727,
        "end": 752,
        "callee": {
          "type": "Identifier",
          "start": 727,
          "end": 729,
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 730,
            "end": 751,
            "properties": [
              {
                "type": "Property",
                "start": 732,
                "end": 749,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 733,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 735,
                  "end": 749,
                  "callee": {
                    "type": "Identifier",
                    "start": 739,
                    "end": 747,
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 754,
      "end": 768,
      "expression": {
        "type": "CallExpression",
        "start": 754,
        "end": 767,
        "callee": {
          "type": "Identifier",
          "start": 754,
          "end": 756,
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 757,
            "end": 766,
            "properties": [
              {
                "type": "Property",
                "start": 759,
                "end": 764,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 760,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 762,
                  "end": 764,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 770,
      "end": 792,
      "expression": {
        "type": "CallExpression",
        "start": 770,
        "end": 791,
        "callee": {
          "type": "Identifier",
          "start": 770,
          "end": 772,
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 773,
            "end": 790,
            "properties": [
              {
                "type": "Property",
                "start": 775,
                "end": 788,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 776,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 778,
                  "end": 788,
                  "callee": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 786,
                    "decorators": [],
                    "name": "SubD",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 793,
      "end": 819,
      "expression": {
        "type": "CallExpression",
        "start": 793,
        "end": 818,
        "callee": {
          "type": "Identifier",
          "start": 793,
          "end": 795,
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 796,
            "end": 817,
            "properties": [
              {
                "type": "Property",
                "start": 798,
                "end": 815,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 799,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 801,
                  "end": 815,
                  "callee": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 813,
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 829,
      "end": 852,
      "expression": {
        "type": "CallExpression",
        "start": 829,
        "end": 851,
        "callee": {
          "type": "Identifier",
          "start": 829,
          "end": 831,
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 832,
            "end": 850,
            "properties": [
              {
                "type": "Property",
                "start": 834,
                "end": 848,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 835,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 837,
                  "end": 848,
                  "callee": {
                    "type": "Identifier",
                    "start": 841,
                    "end": 846,
                    "decorators": [],
                    "name": "Class",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 853,
      "end": 860,
      "expression": {
        "type": "CallExpression",
        "start": 853,
        "end": 859,
        "callee": {
          "type": "Identifier",
          "start": 853,
          "end": 855,
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 856,
            "end": 858,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 861,
      "end": 874,
      "expression": {
        "type": "CallExpression",
        "start": 861,
        "end": 873,
        "callee": {
          "type": "Identifier",
          "start": 861,
          "end": 863,
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 864,
            "end": 872,
            "properties": [
              {
                "type": "Property",
                "start": 866,
                "end": 870,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 866,
                  "end": 867,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 869,
                  "end": 870,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 875,
      "end": 894,
      "expression": {
        "type": "CallExpression",
        "start": 875,
        "end": 893,
        "callee": {
          "type": "Identifier",
          "start": 875,
          "end": 877,
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 878,
            "end": 892,
            "properties": [
              {
                "type": "Property",
                "start": 880,
                "end": 890,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 881,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 883,
                  "end": 890,
                  "value": "world",
                  "raw": "\"world\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
