__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 277,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 10,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 0,
        "end": 9,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 4,
          "end": 7,
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 46,
            "decorators": [],
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 49,
            "end": 111,
            "expression": {
              "type": "ArrayExpression",
              "start": 49,
              "end": 69,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 50,
                  "end": 58,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 51,
                      "end": 54,
                      "raw": "'1'",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 56,
                      "end": 57,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 60,
                  "end": 68,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 61,
                      "end": 64,
                      "raw": "'2'",
                      "value": "2",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 66,
                      "end": 67,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 73,
              "end": 111,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 73,
                  "end": 99,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 81,
                    "end": 99,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 82,
                        "end": 98,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 83,
                            "end": 89
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 91,
                            "end": 97
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 81,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 102,
                  "end": 111
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 113,
        "end": 150,
        "arguments": [
          {
            "type": "Identifier",
            "start": 121,
            "end": 149,
            "decorators": [],
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 117,
          "end": 120,
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 182,
            "decorators": [],
            "name": "potentiallyNullIterable",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 185,
            "end": 242,
            "expression": {
              "type": "ArrayExpression",
              "start": 185,
              "end": 205,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 186,
                  "end": 194,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 187,
                      "end": 190,
                      "raw": "'1'",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 192,
                      "end": 193,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 196,
                  "end": 204,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 197,
                      "end": 200,
                      "raw": "'2'",
                      "value": "2",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 202,
                      "end": 203,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 209,
              "end": 242,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 235,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 217,
                    "end": 235,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 218,
                        "end": 234,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 219,
                            "end": 225
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 227,
                            "end": 233
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 217,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 238,
                  "end": 242
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 277,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 244,
        "end": 276,
        "arguments": [
          {
            "type": "Identifier",
            "start": 252,
            "end": 275,
            "decorators": [],
            "name": "potentiallyNullIterable",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
