__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 44,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 22,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 44,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 38,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 26,
                      "end": 38,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 29,
                        "end": 38,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 32,
                          "end": 38
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 44,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "name": "blah",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 82,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 70,
                    "end": 80,
                    "argument": {
                      "type": "Literal",
                      "start": 77,
                      "end": 79,
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
                "start": 59,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 61,
                  "end": 67
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 167,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 165,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 165,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 165,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 162,
                    "expression": {
                      "type": "CallExpression",
                      "start": 125,
                      "end": 162,
                      "callee": {
                        "type": "Super",
                        "start": 125,
                        "end": 130
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 131,
                          "end": 161,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 137,
                            "end": 161,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 139,
                                "end": 159,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 146,
                                  "end": 158,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 146,
                                    "end": 156,
                                    "object": {
                                      "type": "Super",
                                      "start": 146,
                                      "end": 151
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 152,
                                      "end": 156,
                                      "name": "blah",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
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
