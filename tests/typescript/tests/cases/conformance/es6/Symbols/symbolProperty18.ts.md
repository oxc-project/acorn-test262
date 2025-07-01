__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 21
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 22,
                    "end": 30
                  },
                  "optional": false,
                  "computed": false,
                  "start": 15,
                  "end": 30
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 33,
                  "end": 34
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 14,
                "end": 34
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 47
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 59
                  },
                  "optional": false,
                  "computed": false,
                  "start": 41,
                  "end": 59
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 72,
                          "end": 74
                        },
                        "start": 65,
                        "end": 74
                      }
                    ],
                    "start": 63,
                    "end": 76
                  },
                  "expression": false,
                  "start": 60,
                  "end": 76
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 40,
                "end": 76
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 93
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 105
                  },
                  "optional": false,
                  "computed": false,
                  "start": 87,
                  "end": 105
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 110,
                          "end": 117
                        },
                        "start": 108,
                        "end": 117
                      },
                      "start": 107,
                      "end": 117
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 119,
                    "end": 122
                  },
                  "expression": false,
                  "start": 106,
                  "end": 122
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 82,
                "end": 122
              }
            ],
            "start": 8,
            "end": 124
          },
          "definite": false,
          "start": 4,
          "end": 124
        }
      ],
      "declare": false,
      "start": 0,
      "end": 124
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
            "name": "it",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 132
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 152
              },
              "optional": false,
              "computed": false,
              "start": 137,
              "end": 152
            },
            "optional": false,
            "computed": true,
            "start": 135,
            "end": 153
          },
          "definite": false,
          "start": 130,
          "end": 153
        }
      ],
      "declare": false,
      "start": 126,
      "end": 154
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 173
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 185
                },
                "optional": false,
                "computed": false,
                "start": 167,
                "end": 185
              },
              "optional": false,
              "computed": true,
              "start": 165,
              "end": 186
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 165,
            "end": 188
          },
          "definite": false,
          "start": 159,
          "end": 188
        }
      ],
      "declare": false,
      "start": 155,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 198
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toPrimitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 210
            },
            "optional": false,
            "computed": false,
            "start": 192,
            "end": 210
          },
          "optional": false,
          "computed": true,
          "start": 190,
          "end": 211
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 214,
          "end": 219
        },
        "start": 190,
        "end": 219
      },
      "directive": null,
      "start": 190,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
