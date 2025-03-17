__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 53,
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
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 51,
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
              "end": 51,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 34,
                  "name": "str1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 28,
                      "end": 34
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 47,
                  "name": "str2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 51,
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
      "start": 54,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 193,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 193,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "optional": false,
                            "typeArguments": null
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
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    }
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
