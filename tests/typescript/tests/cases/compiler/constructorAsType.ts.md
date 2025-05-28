__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 74,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 36,
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 36,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 11,
                "end": 36,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 18,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 21,
                    "end": 36,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 22,
                        "end": 35,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 22,
                          "end": 26,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 26,
                          "end": 34,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 28,
                            "end": 34
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 39,
            "end": 73,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 51,
              "end": 73,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 52,
                  "end": 72,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 59,
                    "end": 71,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 60,
                        "end": 70,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 64,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 65,
                          "end": 70,
                          "value": "joe",
                          "raw": "\"joe\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 114,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 113,
            "decorators": [],
            "name": "Person2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 88,
                "end": 113,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 89,
                    "end": 112,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 97,
                        "end": 111,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 98,
                            "end": 110,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 102,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 109,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 103,
                                "end": 109
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 133,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 132,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 116,
          "end": 122,
          "decorators": [],
          "name": "Person",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 125,
          "end": 132,
          "decorators": [],
          "name": "Person2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
