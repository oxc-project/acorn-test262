__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 194,
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
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 79,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 79,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 192,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 95,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 95,
              "end": 192,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 111,
                          "end": 118,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 119,
                          "end": 121,
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
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 134,
                          "end": 141,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
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
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 165,
                          "end": 172,
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
