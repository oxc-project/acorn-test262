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
              "start": 22,
              "end": 29
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
                      "start": 37,
                      "end": 43
                    },
                    "start": 35,
                    "end": 43
                  },
                  "start": 30,
                  "end": 43
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 46,
                  "end": 52
                },
                "start": 44,
                "end": 52
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
                      "start": 70,
                      "end": 72
                    },
                    "start": 63,
                    "end": 73
                  }
                ],
                "start": 53,
                "end": 79
              },
              "expression": false,
              "start": 29,
              "end": 79
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 79
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
              "start": 84,
              "end": 95
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 110
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 111,
                          "end": 118
                        },
                        "optional": false,
                        "computed": false,
                        "start": 108,
                        "end": 118
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 119,
                          "end": 121
                        }
                      ],
                      "optional": false,
                      "start": 108,
                      "end": 122
                    },
                    "directive": null,
                    "start": 108,
                    "end": 122
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 133
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 134,
                          "end": 141
                        },
                        "optional": false,
                        "computed": false,
                        "start": 131,
                        "end": 141
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 142,
                          "end": 143
                        }
                      ],
                      "optional": false,
                      "start": 131,
                      "end": 144
                    },
                    "directive": null,
                    "start": 131,
                    "end": 144
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 164
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 165,
                          "end": 172
                        },
                        "optional": false,
                        "computed": false,
                        "start": 162,
                        "end": 172
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 162,
                      "end": 174
                    },
                    "directive": null,
                    "start": 162,
                    "end": 174
                  }
                ],
                "start": 98,
                "end": 192
              },
              "expression": false,
              "start": 95,
              "end": 192
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 84,
            "end": 192
          }
        ],
        "start": 9,
        "end": 194
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 194
}
```
