__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 15,
            "decorators": [],
            "name": "fInferred",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 18,
            "end": 39,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 19,
                "end": 33,
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "start": 19,
                  "end": 28,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 21,
                      "end": 26,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 21,
                        "end": 26,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 21,
                          "end": 22,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 25,
                          "end": 26,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  ]
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 31,
                  "end": 33,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 132,
            "decorators": [],
            "name": "fAnnotated",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 116,
                "end": 132,
                "exprName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "decorators": [],
                  "name": "fInferred",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 135,
            "end": 156,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 136,
                "end": 150,
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "start": 136,
                  "end": 145,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 138,
                      "end": 143,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 139,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 138,
                        "end": 143,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  ]
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 148,
                  "end": 150,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 199,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 199,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 174,
                "end": 199,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 174,
                    "end": 187,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 176,
                        "end": 185,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 177,
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 177,
                          "end": 185,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 190,
                    "end": 199
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 216,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 207,
            "end": 212,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 210,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "t",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 218,
      "end": 245,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 242,
        "end": 245,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 230,
        "decorators": [],
        "name": "fst",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 231,
          "end": 240,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 231,
            "end": 236,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 233,
                "end": 234,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            ]
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "t",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
