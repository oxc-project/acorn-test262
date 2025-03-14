__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 557,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 151,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 151,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 120,
            "end": 149,
            "argument": {
              "type": "BinaryExpression",
              "start": 127,
              "end": 148,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 127,
                "end": 135,
                "argument": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 140,
                "end": 148,
                "raw": "\"number\"",
                "value": "number"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 94,
        "decorators": [],
        "name": "isNumber",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 101,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 101,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 98,
              "end": 101
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 115,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 104,
          "end": 115,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 115,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 191,
            "decorators": [],
            "name": "arrayOfStringsNumbersAndBooleans",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 194,
            "end": 233,
            "elements": [
              {
                "type": "Literal",
                "start": 195,
                "end": 203,
                "raw": "\"string\"",
                "value": "string"
              },
              {
                "type": "Literal",
                "start": 205,
                "end": 210,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 212,
                "end": 213,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 215,
                "end": 223,
                "raw": "\"strung\"",
                "value": "strung"
              },
              {
                "type": "Literal",
                "start": 225,
                "end": 226,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 228,
                "end": 232,
                "raw": "true",
                "value": true
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
      "start": 235,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 272,
            "decorators": [],
            "name": "foundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 272,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 254,
                "end": 272,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 263,
                    "end": 272
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 322,
            "arguments": [
              {
                "type": "Identifier",
                "start": 313,
                "end": 321,
                "decorators": [],
                "name": "isNumber",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 275,
              "end": 312,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 275,
                "end": 307,
                "decorators": [],
                "name": "arrayOfStringsNumbersAndBooleans",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 312,
                "decorators": [],
                "name": "find",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 371,
            "decorators": [],
            "name": "readonlyArrayOfStringsNumbersAndBooleans",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 374,
            "end": 450,
            "expression": {
              "type": "Identifier",
              "start": 374,
              "end": 406,
              "decorators": [],
              "name": "arrayOfStringsNumbersAndBooleans",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 450,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 423,
                "end": 450,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 424,
                    "end": 449,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 424,
                        "end": 430
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 433,
                        "end": 439
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 442,
                        "end": 449
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 410,
                "end": 423,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 556,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 555,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 497,
            "decorators": [],
            "name": "readonlyFoundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 497,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 479,
                "end": 497,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 479,
                    "end": 485
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 488,
                    "end": 497
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 500,
            "end": 555,
            "arguments": [
              {
                "type": "Identifier",
                "start": 546,
                "end": 554,
                "decorators": [],
                "name": "isNumber",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 500,
              "end": 545,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 500,
                "end": 540,
                "decorators": [],
                "name": "readonlyArrayOfStringsNumbersAndBooleans",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 541,
                "end": 545,
                "decorators": [],
                "name": "find",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
