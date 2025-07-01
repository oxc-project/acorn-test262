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
        "start": 9,
        "end": 10
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 18
              },
              "typeArguments": null,
              "start": 17,
              "end": 18
            },
            "start": 15,
            "end": 18
          },
          "start": 14,
          "end": 18
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 24
              },
              "typeArguments": null,
              "start": 23,
              "end": 24
            },
            "start": 21,
            "end": 24
          },
          "start": 20,
          "end": 24
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "typeArguments": null,
          "start": 27,
          "end": 28
        },
        "start": 25,
        "end": 28
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "start": 31,
            "end": 40
          }
        ],
        "start": 29,
        "end": 42
      },
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 47,
                        "end": 48
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 51,
                            "end": 55
                          }
                        ],
                        "start": 50,
                        "end": 56
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 47,
                      "end": 56
                    }
                  ],
                  "start": 45,
                  "end": 58
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 63
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 66,
                            "end": 67
                          }
                        ],
                        "start": 65,
                        "end": 68
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 62,
                      "end": 68
                    }
                  ],
                  "start": 60,
                  "end": 70
                }
              ],
              "optional": false,
              "start": 43,
              "end": 71
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "optional": false,
            "computed": false,
            "start": 43,
            "end": 73
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 74,
            "end": 75
          },
          "optional": false,
          "computed": true,
          "start": 43,
          "end": 76
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 79,
          "end": 81
        },
        "start": 43,
        "end": 81
      },
      "directive": null,
      "start": 43,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 89
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 93
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 96,
                            "end": 97
                          }
                        ],
                        "start": 95,
                        "end": 98
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 92,
                      "end": 98
                    }
                  ],
                  "start": 90,
                  "end": 100
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 105
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 108,
                            "end": 112
                          }
                        ],
                        "start": 107,
                        "end": 113
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 104,
                      "end": 113
                    }
                  ],
                  "start": 102,
                  "end": 115
                }
              ],
              "optional": false,
              "start": 88,
              "end": 116
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "optional": false,
            "computed": false,
            "start": 88,
            "end": 118
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 119,
            "end": 120
          },
          "optional": false,
          "computed": true,
          "start": 88,
          "end": 121
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 124,
          "end": 126
        },
        "start": 88,
        "end": 126
      },
      "directive": null,
      "start": 88,
      "end": 126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
