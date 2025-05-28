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
      "expression": {
        "type": "NewExpression",
        "start": 0,
        "end": 9,
        "callee": {
          "type": "Identifier",
          "start": 4,
          "end": 7,
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 112,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 111,
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
                      "value": "1",
                      "raw": "'1'"
                    },
                    {
                      "type": "Literal",
                      "start": 56,
                      "end": 57,
                      "value": 1,
                      "raw": "1"
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
                      "value": "2",
                      "raw": "'2'"
                    },
                    {
                      "type": "Literal",
                      "start": 66,
                      "end": 67,
                      "value": 2,
                      "raw": "2"
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 81,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 102,
                  "end": 111
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 151,
      "expression": {
        "type": "NewExpression",
        "start": 113,
        "end": 150,
        "callee": {
          "type": "Identifier",
          "start": 117,
          "end": 120,
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 243,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 242,
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
                      "value": "1",
                      "raw": "'1'"
                    },
                    {
                      "type": "Literal",
                      "start": 192,
                      "end": 193,
                      "value": 1,
                      "raw": "1"
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
                      "value": "2",
                      "raw": "'2'"
                    },
                    {
                      "type": "Literal",
                      "start": 202,
                      "end": 203,
                      "value": 2,
                      "raw": "2"
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 217,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 238,
                  "end": 242
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 277,
      "expression": {
        "type": "NewExpression",
        "start": 244,
        "end": 276,
        "callee": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
