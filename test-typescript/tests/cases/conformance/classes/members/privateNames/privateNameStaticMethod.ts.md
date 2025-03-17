__ESTREE_TEST__:PASS:
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
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 79,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 79,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 43,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 37,
                      "end": 43
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                "start": 44,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 46,
                  "end": 52
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
            "start": 84,
            "end": 192,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 95,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 95,
              "end": 192,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 108,
                        "end": 118,
                        "object": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 110,
                          "name": "A1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 111,
                          "end": 118,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 119,
                          "end": 121,
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
                    "start": 131,
                    "end": 144,
                    "expression": {
                      "type": "CallExpression",
                      "start": 131,
                      "end": 144,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 131,
                        "end": 141,
                        "object": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 133,
                          "name": "A1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 134,
                          "end": 141,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
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
                    "start": 162,
                    "end": 174,
                    "expression": {
                      "type": "CallExpression",
                      "start": 162,
                      "end": 174,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 162,
                        "end": 172,
                        "object": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 164,
                          "name": "A1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 165,
                          "end": 172,
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
