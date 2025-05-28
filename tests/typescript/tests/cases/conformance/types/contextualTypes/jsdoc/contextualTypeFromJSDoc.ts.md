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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 111,
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
                    "value": "a",
                    "raw": "'a'"
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 84,
                          "end": 85,
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
                    "value": "b",
                    "raw": "'b'"
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 105,
                          "end": 106,
                          "value": 2,
                          "raw": "2"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
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
      "type": "FunctionDeclaration",
      "start": 171,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                      "value": "a",
                      "raw": "'a'"
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 216,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 218,
                            "end": 219,
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
                      "value": "b",
                      "raw": "'b'"
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 241,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 243,
                            "end": 244,
                            "value": 2,
                            "raw": "2"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 461,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 266,
        "end": 461,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 338,
            "end": 354,
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
            "value": {
              "type": "FunctionExpression",
              "start": 343,
              "end": 354,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 351,
                "end": 354,
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
          },
          {
            "type": "MethodDefinition",
            "start": 359,
            "end": 459,
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
            "value": {
              "type": "FunctionExpression",
              "start": 364,
              "end": 459,
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
                              "value": "a",
                              "raw": "'a'"
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 406,
                                    "end": 407,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 409,
                                    "end": 410,
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
                              "value": "b",
                              "raw": "'b'"
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 435,
                                    "end": 436,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 438,
                                    "end": 439,
                                    "value": 2,
                                    "raw": "2"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
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
              "expression": false
            },
            "kind": "get",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
