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
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              },
              "start": 17,
              "end": 25
            },
            "start": 15,
            "end": 25
          },
          "value": null,
          "start": 11,
          "end": 25
        }
      ],
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 42
                },
                "optional": false,
                "computed": false,
                "start": 33,
                "end": 42
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 44,
                      "end": 45
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 48
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "UnaryExpression",
                    "operator": "void",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "item ",
                            "raw": "'item '",
                            "start": 59,
                            "end": 66
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 69,
                            "end": 70
                          },
                          "start": 59,
                          "end": 70
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": " = ",
                          "raw": "' = '",
                          "start": 73,
                          "end": 78
                        },
                        "start": 59,
                        "end": 78
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "start": 59,
                      "end": 82
                    },
                    "prefix": true,
                    "start": 53,
                    "end": 83
                  },
                  "id": null,
                  "generator": false,
                  "start": 43,
                  "end": 83
                }
              ],
              "optional": false,
              "start": 33,
              "end": 84
            },
            "directive": null,
            "start": 33,
            "end": 85
          }
        ],
        "start": 27,
        "end": 87
      },
      "expression": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 98
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
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              },
              "start": 102,
              "end": 110
            },
            "start": 100,
            "end": 110
          },
          "start": 99,
          "end": 110
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 115,
              "end": 121
            },
            "start": 113,
            "end": 121
          },
          "start": 112,
          "end": 121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 123,
        "end": 126
      },
      "expression": false,
      "start": 88,
      "end": 126
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "definite": false,
          "start": 132,
          "end": 137
        }
      ],
      "declare": false,
      "start": 128,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 140
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 144
        },
        "start": 139,
        "end": 144
      },
      "directive": null,
      "start": 139,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 149,
                "end": 150
              }
            ],
            "start": 148,
            "end": 151
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 153,
            "end": 158
          }
        ],
        "optional": false,
        "start": 146,
        "end": 159
      },
      "directive": null,
      "start": 146,
      "end": 160
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
