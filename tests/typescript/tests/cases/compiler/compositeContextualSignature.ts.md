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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "start": 43,
              "end": 48
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 48
          }
        ],
        "start": 32,
        "end": 49
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 66
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 68
                    },
                    "typeArguments": null,
                    "start": 67,
                    "end": 68
                  }
                ],
                "start": 66,
                "end": 69
              },
              "start": 53,
              "end": 69
            },
            "start": 51,
            "end": 69
          },
          "start": 50,
          "end": 69
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 71,
        "end": 74
      },
      "expression": false,
      "start": 22,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 77
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 103
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 119,
                      "end": 122
                    },
                    "id": null,
                    "generator": false,
                    "start": 113,
                    "end": 122
                  }
                ],
                "start": 84,
                "end": 129
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 145,
                    "end": 146
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 176,
                                "end": 183
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 184,
                                "end": 187
                              },
                              "optional": false,
                              "computed": false,
                              "start": 176,
                              "end": 187
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Hello",
                                "raw": "'Hello'",
                                "start": 188,
                                "end": 195
                              }
                            ],
                            "optional": false,
                            "start": 176,
                            "end": 196
                          },
                          "directive": null,
                          "start": 176,
                          "end": 196
                        }
                      ],
                      "start": 162,
                      "end": 206
                    },
                    "id": null,
                    "generator": false,
                    "start": 156,
                    "end": 206
                  }
                ],
                "start": 135,
                "end": 213
              }
            ],
            "start": 78,
            "end": 216
          }
        ],
        "optional": false,
        "start": 76,
        "end": 217
      },
      "directive": null,
      "start": 76,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 218
}
```
