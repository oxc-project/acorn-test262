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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 22
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
                  "name": "str1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 28,
                      "end": 34
                    },
                    "start": 27,
                    "end": 34
                  },
                  "start": 23,
                  "end": 34
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    "start": 40,
                    "end": 47
                  },
                  "start": 36,
                  "end": 47
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 49,
                "end": 51
              },
              "expression": false,
              "start": 22,
              "end": 51
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 11,
            "end": 51
          }
        ],
        "start": 8,
        "end": 53
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 61
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 89
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
                    "type": "IfStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 103,
                      "end": 107
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 120,
                              "end": 125
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "a1",
                                "raw": "'a1'",
                                "start": 126,
                                "end": 130
                              },
                              {
                                "type": "Literal",
                                "value": "b1",
                                "raw": "'b1'",
                                "start": 132,
                                "end": 136
                              }
                            ],
                            "optional": false,
                            "start": 120,
                            "end": 137
                          },
                          "directive": null,
                          "start": 120,
                          "end": 138
                        }
                      ],
                      "start": 109,
                      "end": 145
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 162,
                              "end": 167
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "a2",
                                "raw": "'a2'",
                                "start": 168,
                                "end": 172
                              },
                              {
                                "type": "Literal",
                                "value": "b2",
                                "raw": "'b2'",
                                "start": 174,
                                "end": 178
                              }
                            ],
                            "optional": false,
                            "start": 162,
                            "end": 179
                          },
                          "directive": null,
                          "start": 162,
                          "end": 180
                        }
                      ],
                      "start": 151,
                      "end": 187
                    },
                    "start": 99,
                    "end": 187
                  }
                ],
                "start": 92,
                "end": 193
              },
              "expression": false,
              "start": 89,
              "end": 193
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 193
          }
        ],
        "start": 72,
        "end": 195
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```
