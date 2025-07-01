__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
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
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 22,
                          "end": 26
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 28,
                            "end": 34
                          },
                          "start": 26,
                          "end": 34
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 22,
                        "end": 35
                      }
                    ],
                    "start": 21,
                    "end": 36
                  },
                  "start": 18,
                  "end": 36
                },
                "start": 11,
                "end": 36
              },
              "start": 10,
              "end": 36
            },
            "start": 4,
            "end": 36
          },
          "init": {
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 64
                        },
                        "value": {
                          "type": "Literal",
                          "value": "joe",
                          "raw": "\"joe\"",
                          "start": 65,
                          "end": 70
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 60,
                        "end": 70
                      }
                    ],
                    "start": 59,
                    "end": 71
                  },
                  "start": 52,
                  "end": 72
                }
              ],
              "start": 51,
              "end": 73
            },
            "expression": false,
            "start": 39,
            "end": 73
          },
          "definite": false,
          "start": 4,
          "end": 73
        }
      ],
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Person2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 98,
                              "end": 102
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 103,
                                "end": 109
                              },
                              "start": 102,
                              "end": 109
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 98,
                            "end": 110
                          }
                        ],
                        "start": 97,
                        "end": 111
                      },
                      "start": 95,
                      "end": 111
                    },
                    "start": 89,
                    "end": 112
                  }
                ],
                "start": 88,
                "end": 113
              },
              "start": 87,
              "end": 113
            },
            "start": 80,
            "end": 113
          },
          "init": null,
          "definite": false,
          "start": 80,
          "end": 113
        }
      ],
      "declare": false,
      "start": 76,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Person",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 122
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Person2",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 132
        },
        "start": 116,
        "end": 132
      },
      "directive": null,
      "start": 116,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
