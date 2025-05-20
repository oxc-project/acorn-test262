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
      "end": 53,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 22,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 51,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 51,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 34,
                  "decorators": [],
                  "name": "str1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 28,
                      "end": 34
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 47,
                  "decorators": [],
                  "name": "str2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  }
                }
              ],
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
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 195,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 193,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 193,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 193,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 99,
                    "end": 187,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 151,
                      "end": 187,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 162,
                          "end": 180,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 162,
                            "end": 179,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 168,
                                "end": 172,
                                "raw": "'a2'",
                                "value": "a2"
                              },
                              {
                                "type": "Literal",
                                "start": 174,
                                "end": 178,
                                "raw": "'b2'",
                                "value": "b2"
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 162,
                              "end": 167
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 109,
                      "end": 145,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 120,
                          "end": 138,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 120,
                            "end": 137,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 126,
                                "end": 130,
                                "raw": "'a1'",
                                "value": "a1"
                              },
                              {
                                "type": "Literal",
                                "start": 132,
                                "end": 136,
                                "raw": "'b1'",
                                "value": "b1"
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 120,
                              "end": 125
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Literal",
                      "start": 103,
                      "end": 107,
                      "raw": "true",
                      "value": true
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
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
