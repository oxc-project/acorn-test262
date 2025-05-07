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
      "end": 195,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 47,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 47,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 39,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 31,
                      "end": 39,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 193,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 60,
              "decorators": [],
              "name": "callTest",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 193,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 193,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 150,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 149,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 131,
                          "end": 148,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 132,
                              "end": 133,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 135,
                              "end": 136,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 138,
                              "end": 142,
                              "raw": "\"hi\"",
                              "value": "hi",
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 144,
                              "end": 145,
                              "raw": "5",
                              "value": 5,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 121,
                        "end": 130,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 121,
                          "end": 125
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 130,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 186,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 159,
                      "end": 185,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 169,
                          "end": 184,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 170,
                              "end": 171,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 173,
                              "end": 174,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 176,
                              "end": 180,
                              "raw": "\"hi\"",
                              "value": "hi",
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 182,
                              "end": 183,
                              "raw": "5",
                              "value": 5,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 168,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 168,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "arrTest",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
