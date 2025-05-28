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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 51,
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
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 51,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 51,
                "body": []
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
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 195,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 193,
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
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 193,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 193,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 99,
                    "end": 187,
                    "test": {
                      "type": "Literal",
                      "start": 103,
                      "end": 107,
                      "value": true,
                      "raw": "true"
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
                          "expression": {
                            "type": "CallExpression",
                            "start": 120,
                            "end": 137,
                            "callee": {
                              "type": "Super",
                              "start": 120,
                              "end": 125
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 126,
                                "end": 130,
                                "value": "a1",
                                "raw": "'a1'"
                              },
                              {
                                "type": "Literal",
                                "start": 132,
                                "end": 136,
                                "value": "b1",
                                "raw": "'b1'"
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 151,
                      "end": 187,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 162,
                          "end": 180,
                          "expression": {
                            "type": "CallExpression",
                            "start": 162,
                            "end": 179,
                            "callee": {
                              "type": "Super",
                              "start": 162,
                              "end": 167
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 168,
                                "end": 172,
                                "value": "a2",
                                "raw": "'a2'"
                              },
                              {
                                "type": "Literal",
                                "start": 174,
                                "end": 178,
                                "value": "b2",
                                "raw": "'b2'"
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    }
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
