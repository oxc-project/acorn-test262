__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 219,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 74,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 74,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 69,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 53,
              "end": 69,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 66,
                "end": 69,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 67,
                    "end": 68,
                    "typeName": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 53,
                "end": 66,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 48,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 43,
              "end": 48,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 217,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 78,
            "end": 216,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 84,
                "end": 129,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 94,
                    "end": 103,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 113,
                    "end": 122,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 119,
                      "end": 122,
                      "body": []
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 135,
                "end": 213,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 145,
                    "end": 146,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 156,
                    "end": 206,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 162,
                      "end": 206,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 176,
                          "end": 196,
                          "expression": {
                            "type": "CallExpression",
                            "start": 176,
                            "end": 196,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 188,
                                "end": 195,
                                "raw": "'Hello'",
                                "value": "Hello"
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 176,
                              "end": 187,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 176,
                                "end": 183,
                                "decorators": [],
                                "name": "console",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 184,
                                "end": 187,
                                "decorators": [],
                                "name": "log",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
