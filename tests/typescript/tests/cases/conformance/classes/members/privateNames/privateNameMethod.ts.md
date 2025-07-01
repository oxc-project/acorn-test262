__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 15,
              "end": 22
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    },
                    "start": 28,
                    "end": 36
                  },
                  "start": 23,
                  "end": 36
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                },
                "start": 37,
                "end": 45
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 63,
                      "end": 65
                    },
                    "start": 56,
                    "end": 66
                  }
                ],
                "start": 46,
                "end": 72
              },
              "expression": false,
              "start": 22,
              "end": 72
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 72
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 88
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    },
                    "start": 93,
                    "end": 101
                  },
                  "start": 89,
                  "end": 101
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
                          "type": "ThisExpression",
                          "start": 113,
                          "end": 117
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 118,
                          "end": 125
                        },
                        "optional": false,
                        "computed": false,
                        "start": 113,
                        "end": 125
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 126,
                          "end": 128
                        }
                      ],
                      "optional": false,
                      "start": 113,
                      "end": 129
                    },
                    "directive": null,
                    "start": 113,
                    "end": 129
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 138,
                          "end": 142
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 143,
                          "end": 150
                        },
                        "optional": false,
                        "computed": false,
                        "start": 138,
                        "end": 150
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 151,
                          "end": 152
                        }
                      ],
                      "optional": false,
                      "start": 138,
                      "end": 153
                    },
                    "directive": null,
                    "start": 138,
                    "end": 153
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 171,
                          "end": 175
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 176,
                          "end": 183
                        },
                        "optional": false,
                        "computed": false,
                        "start": 171,
                        "end": 183
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 171,
                      "end": 185
                    },
                    "directive": null,
                    "start": 171,
                    "end": 185
                  }
                ],
                "start": 103,
                "end": 203
              },
              "expression": false,
              "start": 88,
              "end": 203
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 77,
            "end": 203
          }
        ],
        "start": 9,
        "end": 205
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
