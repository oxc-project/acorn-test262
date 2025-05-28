__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 718,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 700,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 700,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 16,
              "name": "a"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "value": "a",
              "raw": "'a'"
            },
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
            "type": "PropertyDefinition",
            "start": 28,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 28,
              "end": 30,
              "name": "b"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
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
            "type": "PropertyDefinition",
            "start": 45,
            "end": 63,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 54,
              "end": 56,
              "name": "c"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 62,
              "value": "c",
              "raw": "'c'"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 88,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 77,
              "end": 79,
              "name": "d"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 94,
              "end": 96,
              "name": "e"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 99,
              "end": 101,
              "value": "",
              "raw": "''"
            },
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
            "start": 108,
            "end": 175,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 119,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 175,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 175,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 132,
                    "end": 146,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 132,
                      "end": 145,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 132,
                        "end": 139,
                        "object": {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 137,
                          "end": 139,
                          "name": "b"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 142,
                        "end": 145,
                        "value": "b",
                        "raw": "'b'"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 155,
                    "end": 169,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 155,
                      "end": 168,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 155,
                        "end": 162,
                        "object": {
                          "type": "ThisExpression",
                          "start": 155,
                          "end": 159
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 160,
                          "end": 162,
                          "name": "d"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 165,
                        "end": 168,
                        "value": "d",
                        "raw": "'d'"
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 698,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 185,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 698,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 698,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 198,
                    "end": 278,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 204,
                        "end": 277,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 232,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 208,
                            "end": 232,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 210,
                              "end": 232,
                              "typeName": {
                                "type": "Identifier",
                                "start": 210,
                                "end": 216,
                                "decorators": [],
                                "name": "Record",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 216,
                                "end": 232,
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 217,
                                    "end": 223
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 225,
                                    "end": 231
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 235,
                          "end": 277,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 237,
                              "end": 243,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 237,
                                "end": 238,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 240,
                                "end": 243,
                                "value": "a",
                                "raw": "'a'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 245,
                              "end": 251,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 246,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 248,
                                "end": 251,
                                "value": "b",
                                "raw": "'b'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 253,
                              "end": 259,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 253,
                                "end": 254,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 256,
                                "end": 259,
                                "value": "c",
                                "raw": "'c'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 261,
                              "end": 267,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 261,
                                "end": 262,
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 264,
                                "end": 267,
                                "value": "d",
                                "raw": "'d'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 269,
                              "end": 275,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 269,
                                "end": 270,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 272,
                                "end": 275,
                                "value": "e",
                                "raw": "'e'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
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
                    "type": "VariableDeclaration",
                    "start": 287,
                    "end": 448,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 293,
                        "end": 447,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 293,
                          "end": 440,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 307,
                              "end": 319,
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "start": 308,
                                "end": 315,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 313,
                                  "end": 315,
                                  "name": "a"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 318,
                                "end": 319,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 333,
                              "end": 345,
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "start": 334,
                                "end": 341,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 334,
                                  "end": 338
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 339,
                                  "end": 341,
                                  "name": "b"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 344,
                                "end": 345,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 359,
                              "end": 371,
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "start": 360,
                                "end": 367,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 360,
                                  "end": 364
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 365,
                                  "end": 367,
                                  "name": "c"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 370,
                                "end": 371,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 385,
                              "end": 397,
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "start": 386,
                                "end": 393,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 386,
                                  "end": 390
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 391,
                                  "end": 393,
                                  "name": "d"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 396,
                                "end": 397,
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 411,
                              "end": 429,
                              "kind": "init",
                              "key": {
                                "type": "AssignmentExpression",
                                "start": 412,
                                "end": 425,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 412,
                                  "end": 419,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 412,
                                    "end": 416
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 417,
                                    "end": 419,
                                    "name": "e"
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 422,
                                  "end": 425,
                                  "value": "e",
                                  "raw": "'e'"
                                }
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 428,
                                "end": 429,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 447,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 457,
                    "end": 484,
                    "expression": {
                      "type": "CallExpression",
                      "start": 457,
                      "end": 483,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 457,
                        "end": 468,
                        "object": {
                          "type": "Identifier",
                          "start": 457,
                          "end": 464,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 465,
                          "end": 468,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 472,
                          "end": 473,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 478,
                          "end": 479,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 481,
                          "end": 482,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 494,
                    "end": 519,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 500,
                        "end": 518,
                        "id": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 502,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 505,
                          "end": 518,
                          "object": {
                            "type": "Identifier",
                            "start": 505,
                            "end": 509,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 510,
                            "end": 517,
                            "object": {
                              "type": "ThisExpression",
                              "start": 510,
                              "end": 514
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 515,
                              "end": 517,
                              "name": "a"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 528,
                    "end": 553,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 534,
                        "end": 552,
                        "id": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 536,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 539,
                          "end": 552,
                          "object": {
                            "type": "Identifier",
                            "start": 539,
                            "end": 543,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 544,
                            "end": 551,
                            "object": {
                              "type": "ThisExpression",
                              "start": 544,
                              "end": 548
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 549,
                              "end": 551,
                              "name": "b"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 562,
                    "end": 587,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 568,
                        "end": 586,
                        "id": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 570,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 573,
                          "end": 586,
                          "object": {
                            "type": "Identifier",
                            "start": 573,
                            "end": 577,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 578,
                            "end": 585,
                            "object": {
                              "type": "ThisExpression",
                              "start": 578,
                              "end": 582
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 583,
                              "end": 585,
                              "name": "c"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 596,
                    "end": 621,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 602,
                        "end": 620,
                        "id": {
                          "type": "Identifier",
                          "start": 602,
                          "end": 604,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 607,
                          "end": 620,
                          "object": {
                            "type": "Identifier",
                            "start": 607,
                            "end": 611,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 612,
                            "end": 619,
                            "object": {
                              "type": "ThisExpression",
                              "start": 612,
                              "end": 616
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 617,
                              "end": 619,
                              "name": "d"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 630,
                    "end": 655,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 636,
                        "end": 654,
                        "id": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 638,
                          "decorators": [],
                          "name": "e1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 641,
                          "end": 654,
                          "object": {
                            "type": "Identifier",
                            "start": 641,
                            "end": 645,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 646,
                            "end": 653,
                            "object": {
                              "type": "ThisExpression",
                              "start": 646,
                              "end": 650
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 651,
                              "end": 653,
                              "name": "e"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 664,
                    "end": 692,
                    "expression": {
                      "type": "CallExpression",
                      "start": 664,
                      "end": 691,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 664,
                        "end": 675,
                        "object": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 671,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 672,
                          "end": 675,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 676,
                          "end": 678,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 680,
                          "end": 682,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 684,
                          "end": 686,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 688,
                          "end": 690,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 702,
      "end": 717,
      "expression": {
        "type": "CallExpression",
        "start": 702,
        "end": 716,
        "callee": {
          "type": "MemberExpression",
          "start": 702,
          "end": 714,
          "object": {
            "type": "NewExpression",
            "start": 702,
            "end": 709,
            "callee": {
              "type": "Identifier",
              "start": 706,
              "end": 707,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 710,
            "end": 714,
            "decorators": [],
            "name": "test",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
