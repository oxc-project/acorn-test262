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
        "name": "isNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 94
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 98,
              "end": 101
            },
            "start": 96,
            "end": 101
          },
          "start": 95,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            },
            "start": 109,
            "end": 115
          },
          "start": 104,
          "end": 115
        },
        "start": 102,
        "end": 115
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 135
                },
                "prefix": true,
                "start": 127,
                "end": 135
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 140,
                "end": 148
              },
              "start": 127,
              "end": 148
            },
            "start": 120,
            "end": 149
          }
        ],
        "start": 116,
        "end": 151
      },
      "expression": false,
      "start": 77,
      "end": 151
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
            "name": "arrayOfStringsNumbersAndBooleans",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 191
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 195,
                "end": 203
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 205,
                "end": 210
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 212,
                "end": 213
              },
              {
                "type": "Literal",
                "value": "strung",
                "raw": "\"strung\"",
                "start": 215,
                "end": 223
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 225,
                "end": 226
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 228,
                "end": 232
              }
            ],
            "start": 194,
            "end": 233
          },
          "definite": false,
          "start": 159,
          "end": 233
        }
      ],
      "declare": false,
      "start": 153,
      "end": 234
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
            "name": "foundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 254,
                "end": 272
              },
              "start": 252,
              "end": 272
            },
            "start": 241,
            "end": 272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayOfStringsNumbersAndBooleans",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 312
              },
              "optional": false,
              "computed": false,
              "start": 275,
              "end": 312
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 321
              }
            ],
            "optional": false,
            "start": 275,
            "end": 322
          },
          "definite": false,
          "start": 241,
          "end": 322
        }
      ],
      "declare": false,
      "start": 235,
      "end": 323
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
            "name": "readonlyArrayOfStringsNumbersAndBooleans",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 371
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayOfStringsNumbersAndBooleans",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 406
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 423
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
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
                    ],
                    "start": 424,
                    "end": 449
                  }
                ],
                "start": 423,
                "end": 450
              },
              "start": 410,
              "end": 450
            },
            "start": 374,
            "end": 450
          },
          "definite": false,
          "start": 331,
          "end": 450
        }
      ],
      "declare": false,
      "start": 325,
      "end": 451
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
            "name": "readonlyFoundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 479,
                "end": 497
              },
              "start": 477,
              "end": 497
            },
            "start": 458,
            "end": 497
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "readonlyArrayOfStringsNumbersAndBooleans",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 545
              },
              "optional": false,
              "computed": false,
              "start": 500,
              "end": 545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 554
              }
            ],
            "optional": false,
            "start": 500,
            "end": 555
          },
          "definite": false,
          "start": 458,
          "end": 555
        }
      ],
      "declare": false,
      "start": 452,
      "end": 556
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 556
}
```
