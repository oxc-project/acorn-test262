__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 26
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 43
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 47,
                        "end": 51
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 57,
                                "end": 58
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 60,
                                  "end": 66
                                },
                                "start": 58,
                                "end": 66
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 57,
                              "end": 66
                            }
                          ],
                          "start": 55,
                          "end": 68
                        },
                        "start": 55,
                        "end": 68
                      },
                      "start": 47,
                      "end": 68
                    },
                    "start": 45,
                    "end": 68
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 86,
                          "end": 90
                        },
                        "start": 79,
                        "end": 91
                      }
                    ],
                    "start": 69,
                    "end": 97
                  },
                  "expression": false,
                  "start": 43,
                  "end": 97
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 35,
                "end": 97
              }
            ],
            "start": 29,
            "end": 100
          },
          "definite": false,
          "start": 22,
          "end": 100
        }
      ],
      "declare": false,
      "start": 16,
      "end": 101
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 131
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 148
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 152,
                          "end": 155
                        },
                        "start": 150,
                        "end": 155
                      },
                      "start": 149,
                      "end": 155
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSThisType",
                          "start": 163,
                          "end": 167
                        },
                        "start": 163,
                        "end": 167
                      },
                      "start": 158,
                      "end": 167
                    },
                    "start": 156,
                    "end": 167
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 185,
                          "end": 189
                        },
                        "start": 178,
                        "end": 190
                      }
                    ],
                    "start": 168,
                    "end": 196
                  },
                  "expression": false,
                  "start": 148,
                  "end": 196
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 196
              }
            ],
            "start": 134,
            "end": 199
          },
          "definite": false,
          "start": 127,
          "end": 199
        }
      ],
      "declare": false,
      "start": 121,
      "end": 200
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 200
}
```
