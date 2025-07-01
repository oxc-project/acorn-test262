__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 4,
          "end": 7
        },
        "typeArguments": null,
        "arguments": [],
        "start": 0,
        "end": 9
      },
      "directive": null,
      "start": 0,
      "end": 10
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
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 46
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 51,
                      "end": 54
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 56,
                      "end": 57
                    }
                  ],
                  "start": 50,
                  "end": 58
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 61,
                      "end": 64
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 66,
                      "end": 67
                    }
                  ],
                  "start": 60,
                  "end": 68
                }
              ],
              "start": 49,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 81
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
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
                        ],
                        "start": 82,
                        "end": 98
                      }
                    ],
                    "start": 81,
                    "end": 99
                  },
                  "start": 73,
                  "end": 99
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 102,
                  "end": 111
                }
              ],
              "start": 73,
              "end": 111
            },
            "start": 49,
            "end": 111
          },
          "definite": false,
          "start": 18,
          "end": 111
        }
      ],
      "declare": false,
      "start": 12,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 149
          }
        ],
        "start": 113,
        "end": 150
      },
      "directive": null,
      "start": 113,
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
            "name": "potentiallyNullIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 182
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 187,
                      "end": 190
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 192,
                      "end": 193
                    }
                  ],
                  "start": 186,
                  "end": 194
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 197,
                      "end": 200
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 202,
                      "end": 203
                    }
                  ],
                  "start": 196,
                  "end": 204
                }
              ],
              "start": 185,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 217
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
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
                        ],
                        "start": 218,
                        "end": 234
                      }
                    ],
                    "start": 217,
                    "end": 235
                  },
                  "start": 209,
                  "end": 235
                },
                {
                  "type": "TSNullKeyword",
                  "start": 238,
                  "end": 242
                }
              ],
              "start": 209,
              "end": 242
            },
            "start": 185,
            "end": 242
          },
          "definite": false,
          "start": 159,
          "end": 242
        }
      ],
      "declare": false,
      "start": 153,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 251
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyNullIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 275
          }
        ],
        "start": 244,
        "end": 276
      },
      "directive": null,
      "start": 244,
      "end": 277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 277
}
```
