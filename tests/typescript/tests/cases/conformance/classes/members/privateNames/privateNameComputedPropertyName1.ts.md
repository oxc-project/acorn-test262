__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "a",
              "start": 14,
              "end": 16
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 19,
              "end": 22
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 23
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "b",
              "start": 28,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 28,
            "end": 39
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "c",
              "start": 54,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "c",
              "raw": "'c'",
              "start": 59,
              "end": 62
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 45,
            "end": 63
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "d",
              "start": 77,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 68,
            "end": 88
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "e",
              "start": 94,
              "end": 96
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 99,
              "end": 101
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 94,
            "end": 102
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 119
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "b",
                          "start": 137,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 132,
                        "end": 139
                      },
                      "right": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 142,
                        "end": 145
                      },
                      "start": 132,
                      "end": 145
                    },
                    "directive": null,
                    "start": 132,
                    "end": 146
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 155,
                          "end": 159
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "d",
                          "start": 160,
                          "end": 162
                        },
                        "optional": false,
                        "computed": false,
                        "start": 155,
                        "end": 162
                      },
                      "right": {
                        "type": "Literal",
                        "value": "d",
                        "raw": "'d'",
                        "start": 165,
                        "end": 168
                      },
                      "start": 155,
                      "end": 168
                    },
                    "directive": null,
                    "start": 155,
                    "end": 169
                  }
                ],
                "start": 122,
                "end": 175
              },
              "expression": false,
              "start": 119,
              "end": 175
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 108,
            "end": 175
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 185
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Record",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 210,
                                "end": 216
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
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
                                ],
                                "start": 216,
                                "end": 232
                              },
                              "start": 210,
                              "end": 232
                            },
                            "start": 208,
                            "end": 232
                          },
                          "start": 204,
                          "end": 232
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 237,
                                "end": 238
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "'a'",
                                "start": 240,
                                "end": 243
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 237,
                              "end": 243
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 246
                              },
                              "value": {
                                "type": "Literal",
                                "value": "b",
                                "raw": "'b'",
                                "start": 248,
                                "end": 251
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 245,
                              "end": 251
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 253,
                                "end": 254
                              },
                              "value": {
                                "type": "Literal",
                                "value": "c",
                                "raw": "'c'",
                                "start": 256,
                                "end": 259
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 253,
                              "end": 259
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 261,
                                "end": 262
                              },
                              "value": {
                                "type": "Literal",
                                "value": "d",
                                "raw": "'d'",
                                "start": 264,
                                "end": 267
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 261,
                              "end": 267
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 269,
                                "end": 270
                              },
                              "value": {
                                "type": "Literal",
                                "value": "e",
                                "raw": "'e'",
                                "start": 272,
                                "end": 275
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 269,
                              "end": 275
                            }
                          ],
                          "start": 235,
                          "end": 277
                        },
                        "definite": false,
                        "start": 204,
                        "end": 277
                      }
                    ],
                    "declare": false,
                    "start": 198,
                    "end": 278
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "a",
                                  "start": 313,
                                  "end": 315
                                },
                                "optional": false,
                                "computed": false,
                                "start": 308,
                                "end": 315
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 318,
                                "end": 319
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 307,
                              "end": 319
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 334,
                                  "end": 338
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "b",
                                  "start": 339,
                                  "end": 341
                                },
                                "optional": false,
                                "computed": false,
                                "start": 334,
                                "end": 341
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 345
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 333,
                              "end": 345
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 360,
                                  "end": 364
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "c",
                                  "start": 365,
                                  "end": 367
                                },
                                "optional": false,
                                "computed": false,
                                "start": 360,
                                "end": 367
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 371
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 359,
                              "end": 371
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 386,
                                  "end": 390
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "d",
                                  "start": 391,
                                  "end": 393
                                },
                                "optional": false,
                                "computed": false,
                                "start": 386,
                                "end": 393
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 396,
                                "end": 397
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 385,
                              "end": 397
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 412,
                                    "end": 416
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "e",
                                    "start": 417,
                                    "end": 419
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 412,
                                  "end": 419
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "e",
                                  "raw": "'e'",
                                  "start": 422,
                                  "end": 425
                                },
                                "start": 412,
                                "end": 425
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 428,
                                "end": 429
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 411,
                              "end": 429
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 440
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 447
                        },
                        "definite": false,
                        "start": 293,
                        "end": 447
                      }
                    ],
                    "declare": false,
                    "start": 287,
                    "end": 448
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 457,
                          "end": 464
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 465,
                          "end": 468
                        },
                        "optional": false,
                        "computed": false,
                        "start": 457,
                        "end": 468
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 470
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 472,
                          "end": 473
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 476
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 478,
                          "end": 479
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 482
                        }
                      ],
                      "optional": false,
                      "start": 457,
                      "end": 483
                    },
                    "directive": null,
                    "start": 457,
                    "end": 484
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 500,
                          "end": 502
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 505,
                            "end": 509
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 510,
                              "end": 514
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "a",
                              "start": 515,
                              "end": 517
                            },
                            "optional": false,
                            "computed": false,
                            "start": 510,
                            "end": 517
                          },
                          "optional": false,
                          "computed": true,
                          "start": 505,
                          "end": 518
                        },
                        "definite": false,
                        "start": 500,
                        "end": 518
                      }
                    ],
                    "declare": false,
                    "start": 494,
                    "end": 519
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 536
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 539,
                            "end": 543
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 544,
                              "end": 548
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "b",
                              "start": 549,
                              "end": 551
                            },
                            "optional": false,
                            "computed": false,
                            "start": 544,
                            "end": 551
                          },
                          "optional": false,
                          "computed": true,
                          "start": 539,
                          "end": 552
                        },
                        "definite": false,
                        "start": 534,
                        "end": 552
                      }
                    ],
                    "declare": false,
                    "start": 528,
                    "end": 553
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 568,
                          "end": 570
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 573,
                            "end": 577
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 578,
                              "end": 582
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "c",
                              "start": 583,
                              "end": 585
                            },
                            "optional": false,
                            "computed": false,
                            "start": 578,
                            "end": 585
                          },
                          "optional": false,
                          "computed": true,
                          "start": 573,
                          "end": 586
                        },
                        "definite": false,
                        "start": 568,
                        "end": 586
                      }
                    ],
                    "declare": false,
                    "start": 562,
                    "end": 587
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 602,
                          "end": 604
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 607,
                            "end": 611
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 612,
                              "end": 616
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "d",
                              "start": 617,
                              "end": 619
                            },
                            "optional": false,
                            "computed": false,
                            "start": 612,
                            "end": 619
                          },
                          "optional": false,
                          "computed": true,
                          "start": 607,
                          "end": 620
                        },
                        "definite": false,
                        "start": 602,
                        "end": 620
                      }
                    ],
                    "declare": false,
                    "start": 596,
                    "end": 621
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 638
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 641,
                            "end": 645
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 646,
                              "end": 650
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "e",
                              "start": 651,
                              "end": 653
                            },
                            "optional": false,
                            "computed": false,
                            "start": 646,
                            "end": 653
                          },
                          "optional": false,
                          "computed": true,
                          "start": 641,
                          "end": 654
                        },
                        "definite": false,
                        "start": 636,
                        "end": 654
                      }
                    ],
                    "declare": false,
                    "start": 630,
                    "end": 655
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 671
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 672,
                          "end": 675
                        },
                        "optional": false,
                        "computed": false,
                        "start": 664,
                        "end": 675
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 678
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 680,
                          "end": 682
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 684,
                          "end": 686
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 688,
                          "end": 690
                        }
                      ],
                      "optional": false,
                      "start": 664,
                      "end": 691
                    },
                    "directive": null,
                    "start": 664,
                    "end": 692
                  }
                ],
                "start": 188,
                "end": 698
              },
              "expression": false,
              "start": 185,
              "end": 698
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 698
          }
        ],
        "start": 8,
        "end": 700
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 700
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 707
            },
            "typeArguments": null,
            "arguments": [],
            "start": 702,
            "end": 709
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 714
          },
          "optional": false,
          "computed": false,
          "start": 702,
          "end": 714
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 702,
        "end": 716
      },
      "directive": null,
      "start": 702,
      "end": 717
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 718
}
```
