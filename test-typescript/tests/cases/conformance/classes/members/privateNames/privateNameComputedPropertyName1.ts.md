__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 719,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 700,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 16,
              "name": "a"
            },
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "value": "a",
              "raw": "'a'"
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
            "start": 28,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 28,
              "end": 30,
              "name": "b"
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
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 54,
              "end": 56,
              "name": "c"
            },
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 62,
              "value": "c",
              "raw": "'c'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 77,
              "end": 79,
              "name": "d"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 94,
              "end": 96,
              "name": "e"
            },
            "value": {
              "type": "Literal",
              "start": 99,
              "end": 101,
              "value": "",
              "raw": "''"
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
            "type": "MethodDefinition",
            "start": 108,
            "end": 175,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 119,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 175,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "computed": false,
                        "optional": false
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
                        "computed": false,
                        "optional": false
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
            "start": 181,
            "end": 698,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 185,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 698,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 698,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 198,
                    "end": 278,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 204,
                        "end": 277,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 232,
                          "name": "data",
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
                                "name": "Record",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                          },
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 237,
                                "end": 238,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 240,
                                "end": 243,
                                "value": "a",
                                "raw": "'a'"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 245,
                              "end": 251,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 246,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 248,
                                "end": 251,
                                "value": "b",
                                "raw": "'b'"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 253,
                              "end": 259,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 253,
                                "end": 254,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 256,
                                "end": 259,
                                "value": "c",
                                "raw": "'c'"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 261,
                              "end": 267,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 261,
                                "end": 262,
                                "name": "d",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 264,
                                "end": 267,
                                "value": "d",
                                "raw": "'d'"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 269,
                              "end": 275,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 269,
                                "end": 270,
                                "name": "e",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 272,
                                "end": 275,
                                "value": "e",
                                "raw": "'e'"
                              },
                              "kind": "init",
                              "optional": false
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
                    "type": "VariableDeclaration",
                    "start": 287,
                    "end": 448,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 293,
                        "end": 447,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 293,
                          "end": 440,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 307,
                              "end": 319,
                              "method": false,
                              "shorthand": false,
                              "computed": true,
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
                                "computed": false,
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 318,
                                "end": 319,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 333,
                              "end": 345,
                              "method": false,
                              "shorthand": false,
                              "computed": true,
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
                                "computed": false,
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 344,
                                "end": 345,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 359,
                              "end": 371,
                              "method": false,
                              "shorthand": false,
                              "computed": true,
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
                                "computed": false,
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 370,
                                "end": 371,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 385,
                              "end": 397,
                              "method": false,
                              "shorthand": false,
                              "computed": true,
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
                                "computed": false,
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 396,
                                "end": 397,
                                "name": "d",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 411,
                              "end": 429,
                              "method": false,
                              "shorthand": false,
                              "computed": true,
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
                                  "computed": false,
                                  "optional": false
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
                                "name": "e",
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
                        "init": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 447,
                          "name": "data",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 465,
                          "end": 468,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 472,
                          "end": 473,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 478,
                          "end": 479,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 481,
                          "end": 482,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 494,
                    "end": 519,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 500,
                        "end": 518,
                        "id": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 502,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 505,
                          "end": 518,
                          "object": {
                            "type": "Identifier",
                            "start": 505,
                            "end": 509,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "computed": false,
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
                  {
                    "type": "VariableDeclaration",
                    "start": 528,
                    "end": 553,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 534,
                        "end": 552,
                        "id": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 536,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 539,
                          "end": 552,
                          "object": {
                            "type": "Identifier",
                            "start": 539,
                            "end": 543,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "computed": false,
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
                  {
                    "type": "VariableDeclaration",
                    "start": 562,
                    "end": 587,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 568,
                        "end": 586,
                        "id": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 570,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 573,
                          "end": 586,
                          "object": {
                            "type": "Identifier",
                            "start": 573,
                            "end": 577,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "computed": false,
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
                  {
                    "type": "VariableDeclaration",
                    "start": 596,
                    "end": 621,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 602,
                        "end": 620,
                        "id": {
                          "type": "Identifier",
                          "start": 602,
                          "end": 604,
                          "name": "d1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 607,
                          "end": 620,
                          "object": {
                            "type": "Identifier",
                            "start": 607,
                            "end": 611,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "computed": false,
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
                  {
                    "type": "VariableDeclaration",
                    "start": 630,
                    "end": 655,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 636,
                        "end": 654,
                        "id": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 638,
                          "name": "e1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 641,
                          "end": 654,
                          "object": {
                            "type": "Identifier",
                            "start": 641,
                            "end": 645,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "computed": false,
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 672,
                          "end": 675,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 676,
                          "end": 678,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 680,
                          "end": 682,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 684,
                          "end": 686,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 688,
                          "end": 690,
                          "name": "d1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 710,
            "end": 714,
            "name": "test",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
