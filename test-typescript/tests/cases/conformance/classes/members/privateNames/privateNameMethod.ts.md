__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "A1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 205,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 72,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 36,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 56,
                    "end": 66,
                    "argument": {
                      "type": "Literal",
                      "start": 63,
                      "end": 65,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 88,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 101,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 203,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 113,
                    "end": 129,
                    "expression": {
                      "type": "CallExpression",
                      "start": 113,
                      "end": 129,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 113,
                        "end": 125,
                        "object": {
                          "type": "ThisExpression",
                          "start": 113,
                          "end": 117
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 118,
                          "end": 125,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 126,
                          "end": 128,
                          "value": "",
                          "raw": "\"\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 138,
                    "end": 153,
                    "expression": {
                      "type": "CallExpression",
                      "start": 138,
                      "end": 153,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 138,
                        "end": 150,
                        "object": {
                          "type": "ThisExpression",
                          "start": 138,
                          "end": 142
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 143,
                          "end": 150,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 151,
                          "end": 152,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 171,
                    "end": 185,
                    "expression": {
                      "type": "CallExpression",
                      "start": 171,
                      "end": 185,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 171,
                        "end": 183,
                        "object": {
                          "type": "ThisExpression",
                          "start": 171,
                          "end": 175
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 176,
                          "end": 183,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
