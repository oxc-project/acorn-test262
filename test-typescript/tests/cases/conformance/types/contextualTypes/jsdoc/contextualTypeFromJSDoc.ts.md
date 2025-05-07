__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 461,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 64,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 67,
            "end": 111,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 73,
                "end": 88,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 74,
                    "end": 77,
                    "raw": "'a'",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 79,
                    "end": 87,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 81,
                        "end": 85,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 84,
                          "end": 85,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 94,
                "end": 109,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 95,
                    "end": 98,
                    "raw": "'b'",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 100,
                    "end": 108,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 102,
                        "end": 106,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 105,
                          "end": 106,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 171,
      "end": 256,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 184,
        "end": 256,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 190,
            "end": 254,
            "argument": {
              "type": "ArrayExpression",
              "start": 197,
              "end": 253,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 207,
                  "end": 222,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 208,
                      "end": 211,
                      "raw": "'a'",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 213,
                      "end": 221,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 215,
                          "end": 219,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 216,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 218,
                            "end": 219,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 232,
                  "end": 247,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 233,
                      "end": 236,
                      "raw": "'b'",
                      "value": "b",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 238,
                      "end": 246,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 240,
                          "end": 244,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 241,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 243,
                            "end": 244,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  ]
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
        "start": 180,
        "end": 181,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 461,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 266,
        "end": 461,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 338,
            "end": 354,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 343,
              "end": 354,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 351,
                "end": 354,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 344,
                  "end": 349,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 359,
            "end": 459,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 364,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 364,
              "end": 459,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 459,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 377,
                    "end": 453,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 384,
                      "end": 452,
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "start": 398,
                          "end": 413,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 399,
                              "end": 402,
                              "raw": "'a'",
                              "value": "a",
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "ObjectExpression",
                              "start": 404,
                              "end": 412,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 406,
                                  "end": 410,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 406,
                                    "end": 407,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 409,
                                    "end": 410,
                                    "raw": "1",
                                    "value": 1,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "start": 427,
                          "end": 442,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 428,
                              "end": 431,
                              "raw": "'b'",
                              "value": "b",
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "ObjectExpression",
                              "start": 433,
                              "end": 441,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 435,
                                  "end": 439,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 435,
                                    "end": 436,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 438,
                                    "end": 439,
                                    "raw": "2",
                                    "value": 2,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
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
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
