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
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 94,
        "name": "isNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 101,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 101,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 98,
              "end": 101
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "UnaryExpression",
                "start": 127,
                "end": 135,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 140,
                "end": 148,
                "value": "number",
                "raw": "\"number\""
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 115,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 104,
          "end": 115,
          "parameterName": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 191,
            "name": "arrayOfStringsNumbersAndBooleans",
            "typeAnnotation": null,
            "decorators": [],
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
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 205,
                "end": 210,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 212,
                "end": 213,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 215,
                "end": 223,
                "value": "strung",
                "raw": "\"strung\""
              },
              {
                "type": "Literal",
                "start": 225,
                "end": 226,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 228,
                "end": 232,
                "value": true,
                "raw": "true"
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
      "start": 235,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 272,
            "name": "foundNumber",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 322,
            "callee": {
              "type": "MemberExpression",
              "start": 275,
              "end": 312,
              "object": {
                "type": "Identifier",
                "start": 275,
                "end": 307,
                "name": "arrayOfStringsNumbersAndBooleans",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 312,
                "name": "find",
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
                "start": 313,
                "end": 321,
                "name": "isNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 371,
            "name": "readonlyArrayOfStringsNumbersAndBooleans",
            "typeAnnotation": null,
            "decorators": [],
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
              "name": "arrayOfStringsNumbersAndBooleans",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 450,
              "typeName": {
                "type": "Identifier",
                "start": 410,
                "end": 423,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 497,
            "name": "readonlyFoundNumber",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 500,
            "end": 555,
            "callee": {
              "type": "MemberExpression",
              "start": 500,
              "end": 545,
              "object": {
                "type": "Identifier",
                "start": 500,
                "end": 540,
                "name": "readonlyArrayOfStringsNumbersAndBooleans",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 541,
                "end": 545,
                "name": "find",
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
                "start": 546,
                "end": 554,
                "name": "isNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
