__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 205,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 205,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 72,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 72,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 36,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                }
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 203,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 88,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 203,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 101,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  }
                }
              ],
              "returnType": null,
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 126,
                          "end": 128,
                          "value": "",
                          "raw": "\"\""
                        }
                      ],
                      "optional": false
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 151,
                          "end": 152,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
