privateNameStaticMethod.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 194,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 79,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 79,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 79,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 63,
                    "end": 73,
                    "argument": {
                      "type": "Literal",
                      "start": 70,
                      "end": 72,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 43,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 37,
                      "end": 43
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 46,
                  "end": 52
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 192,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 95,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 95,
              "end": 192,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 192,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 108,
                    "end": 122,
                    "expression": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 122,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 119,
                          "end": 121,
                          "raw": "\"\"",
                          "value": ""
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 108,
                        "end": 118,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 110,
                          "decorators": [],
                          "name": "A1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 111,
                          "end": 118,
                          "name": "method"
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 131,
                    "end": 144,
                    "expression": {
                      "type": "CallExpression",
                      "start": 131,
                      "end": 144,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 131,
                        "end": 141,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 133,
                          "decorators": [],
                          "name": "A1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 134,
                          "end": 141,
                          "name": "method"
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 162,
                    "end": 174,
                    "expression": {
                      "type": "CallExpression",
                      "start": 162,
                      "end": 174,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 162,
                        "end": 172,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 164,
                          "decorators": [],
                          "name": "A1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 165,
                          "end": 172,
                          "name": "method"
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "A1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
