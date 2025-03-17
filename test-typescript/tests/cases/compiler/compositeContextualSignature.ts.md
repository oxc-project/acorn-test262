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
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "name": "f",
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
          "start": 50,
          "end": 69,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 53,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 53,
                "end": 66,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 74,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 48,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 217,
        "callee": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 113,
                    "end": 122,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 119,
                      "end": 122,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 156,
                    "end": 206,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 176,
                              "end": 187,
                              "object": {
                                "type": "Identifier",
                                "start": 176,
                                "end": 183,
                                "name": "console",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 184,
                                "end": 187,
                                "name": "log",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 188,
                                "end": 195,
                                "value": "Hello",
                                "raw": "'Hello'"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
