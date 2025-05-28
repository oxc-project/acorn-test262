__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 689,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 50,
          "decorators": [],
          "name": "headerNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 50,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 47,
              "end": 50
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 158,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 103,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 102,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 66,
                  "end": 102,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 67,
                      "end": 101,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 69,
                          "end": 88,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 81,
                            "decorators": [],
                            "name": "hasLineBreak",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 83,
                            "end": 88,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 90,
                          "end": 99,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 95,
                            "decorators": [],
                            "name": "cells",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 97,
                            "end": 99,
                            "elements": []
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
            "start": 108,
            "end": 156,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 114,
                "end": 155,
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 119,
                  "decorators": [],
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 122,
                  "end": 155,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 122,
                    "end": 152,
                    "object": {
                      "type": "ArrayExpression",
                      "start": 122,
                      "end": 145,
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "start": 123,
                          "end": 144,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 124,
                              "end": 142,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 129,
                                "decorators": [],
                                "name": "cells",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 142,
                                "decorators": [],
                                "name": "headerNames",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 152,
                      "decorators": [],
                      "name": "concat",
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
                      "start": 153,
                      "end": 154,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 160,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 172,
          "end": 188,
          "decorators": [],
          "name": "headerNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 188,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 185,
              "end": 188
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 299,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 196,
            "end": 241,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 200,
                "end": 240,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 204,
                  "end": 240,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 205,
                      "end": 239,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 207,
                          "end": 226,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 219,
                            "decorators": [],
                            "name": "hasLineBreak",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 221,
                            "end": 226,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 228,
                          "end": 237,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 228,
                            "end": 233,
                            "decorators": [],
                            "name": "cells",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 235,
                            "end": 237,
                            "elements": []
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
            "start": 246,
            "end": 297,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 296,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 257,
                  "decorators": [],
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 260,
                  "end": 296,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 260,
                    "end": 293,
                    "object": {
                      "type": "ArrayExpression",
                      "start": 260,
                      "end": 283,
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "start": 261,
                          "end": 282,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 262,
                              "end": 280,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 262,
                                "end": 267,
                                "decorators": [],
                                "name": "cells",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 269,
                                "end": 280,
                                "decorators": [],
                                "name": "headerNames",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      ]
                    },
                    "property": {
                      "type": "Literal",
                      "start": 284,
                      "end": 292,
                      "value": "concat",
                      "raw": "\"concat\""
                    },
                    "optional": false,
                    "computed": true
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 379,
      "end": 689,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 391,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 392,
          "end": 426,
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 400,
            "end": 426,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 402,
              "end": 426,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 404,
                  "end": 414,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 405,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 407,
                      "end": 413
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 415,
                  "end": 424,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 416,
                    "end": 424,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 418,
                      "end": 424
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
        "start": 428,
        "end": 689,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 434,
            "end": 461,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 438,
                "end": 460,
                "id": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 440,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 443,
                  "end": 460,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 444,
                    "end": 457,
                    "left": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 451,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 455,
                      "end": 457,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 459,
                    "end": 460,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 497,
            "end": 527,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 501,
                "end": 526,
                "id": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 503,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 506,
                  "end": 526,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 507,
                    "end": 520,
                    "left": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 514,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 518,
                      "end": 520,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Literal",
                    "start": 522,
                    "end": 525,
                    "value": "a",
                    "raw": "\"a\""
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
            "start": 560,
            "end": 582,
            "expression": {
              "type": "AssignmentExpression",
              "start": 560,
              "end": 581,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 560,
                "end": 577,
                "object": {
                  "type": "LogicalExpression",
                  "start": 561,
                  "end": 574,
                  "left": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 568,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "start": 572,
                    "end": 574,
                    "properties": []
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 577,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 580,
                "end": 581,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 626,
            "end": 651,
            "expression": {
              "type": "AssignmentExpression",
              "start": 626,
              "end": 650,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 626,
                "end": 646,
                "object": {
                  "type": "LogicalExpression",
                  "start": 627,
                  "end": 640,
                  "left": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 634,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "start": 638,
                    "end": 640,
                    "properties": []
                  }
                },
                "property": {
                  "type": "Literal",
                  "start": 642,
                  "end": 645,
                  "value": "a",
                  "raw": "\"a\""
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 649,
                "end": 650,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
