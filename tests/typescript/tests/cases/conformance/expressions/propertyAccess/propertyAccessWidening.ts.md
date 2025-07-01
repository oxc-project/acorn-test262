__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "headerNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 47,
              "end": 50
            },
            "start": 45,
            "end": 50
          },
          "start": 34,
          "end": 50
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hasLineBreak",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 69,
                            "end": 81
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 83,
                            "end": 88
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 69,
                          "end": 88
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cells",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 95
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 97,
                            "end": 99
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 90,
                          "end": 99
                        }
                      ],
                      "start": 67,
                      "end": 101
                    }
                  ],
                  "start": 66,
                  "end": 102
                },
                "definite": false,
                "start": 62,
                "end": 102
              }
            ],
            "declare": false,
            "start": 58,
            "end": 103
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
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 119
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cells",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 124,
                                "end": 129
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "headerNames",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 131,
                                "end": 142
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 124,
                              "end": 142
                            }
                          ],
                          "start": 123,
                          "end": 144
                        }
                      ],
                      "start": 122,
                      "end": 145
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 152
                    },
                    "optional": false,
                    "computed": false,
                    "start": 122,
                    "end": 152
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 154
                    }
                  ],
                  "optional": false,
                  "start": 122,
                  "end": 155
                },
                "definite": false,
                "start": 114,
                "end": 155
              }
            ],
            "declare": false,
            "start": 108,
            "end": 156
          }
        ],
        "start": 52,
        "end": 158
      },
      "expression": false,
      "start": 22,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "headerNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 185,
              "end": 188
            },
            "start": 183,
            "end": 188
          },
          "start": 172,
          "end": 188
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 201
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hasLineBreak",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 219
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 221,
                            "end": 226
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 207,
                          "end": 226
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cells",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 228,
                            "end": 233
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 235,
                            "end": 237
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 228,
                          "end": 237
                        }
                      ],
                      "start": 205,
                      "end": 239
                    }
                  ],
                  "start": 204,
                  "end": 240
                },
                "definite": false,
                "start": 200,
                "end": 240
              }
            ],
            "declare": false,
            "start": 196,
            "end": 241
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
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 257
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cells",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 262,
                                "end": 267
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "headerNames",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 269,
                                "end": 280
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 262,
                              "end": 280
                            }
                          ],
                          "start": 261,
                          "end": 282
                        }
                      ],
                      "start": 260,
                      "end": 283
                    },
                    "property": {
                      "type": "Literal",
                      "value": "concat",
                      "raw": "\"concat\"",
                      "start": 284,
                      "end": 292
                    },
                    "optional": false,
                    "computed": true,
                    "start": 260,
                    "end": 293
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 295
                    }
                  ],
                  "optional": false,
                  "start": 260,
                  "end": 296
                },
                "definite": false,
                "start": 252,
                "end": 296
              }
            ],
            "declare": false,
            "start": 246,
            "end": 297
          }
        ],
        "start": 190,
        "end": 299
      },
      "expression": false,
      "start": 160,
      "end": 299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 391
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 407,
                      "end": 413
                    },
                    "start": 405,
                    "end": 413
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 404,
                  "end": 414
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 418,
                      "end": 424
                    },
                    "start": 416,
                    "end": 424
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 415,
                  "end": 424
                }
              ],
              "start": 402,
              "end": 426
            },
            "start": 400,
            "end": 426
          },
          "start": 392,
          "end": 426
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 440
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 451
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 455,
                      "end": 457
                    },
                    "start": 444,
                    "end": 457
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 460
                  },
                  "optional": false,
                  "computed": false,
                  "start": 443,
                  "end": 460
                },
                "definite": false,
                "start": 438,
                "end": 460
              }
            ],
            "declare": false,
            "start": 434,
            "end": 461
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 503
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 514
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 518,
                      "end": 520
                    },
                    "start": 507,
                    "end": 520
                  },
                  "property": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 522,
                    "end": 525
                  },
                  "optional": false,
                  "computed": true,
                  "start": 506,
                  "end": 526
                },
                "definite": false,
                "start": 501,
                "end": 526
              }
            ],
            "declare": false,
            "start": 497,
            "end": 527
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 568
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 572,
                    "end": 574
                  },
                  "start": 561,
                  "end": 574
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 577
                },
                "optional": false,
                "computed": false,
                "start": 560,
                "end": 577
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 580,
                "end": 581
              },
              "start": 560,
              "end": 581
            },
            "directive": null,
            "start": 560,
            "end": 582
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 634
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 638,
                    "end": 640
                  },
                  "start": 627,
                  "end": 640
                },
                "property": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 642,
                  "end": 645
                },
                "optional": false,
                "computed": true,
                "start": 626,
                "end": 646
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 649,
                "end": 650
              },
              "start": 626,
              "end": 650
            },
            "directive": null,
            "start": 626,
            "end": 651
          }
        ],
        "start": 428,
        "end": 689
      },
      "expression": false,
      "start": 379,
      "end": 689
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 689
}
```
