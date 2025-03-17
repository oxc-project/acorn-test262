__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 145,
        "body": [
          {
            "type": "IfStatement",
            "start": 68,
            "end": 143,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 89,
              "end": 143,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 95,
                  "end": 139,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 95,
                    "end": 139,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrowFunctionExpression",
                      "start": 99,
                      "end": 139,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 105,
                        "end": 139,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 113,
                            "end": 133,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 119,
                                "end": 132,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 119,
                                  "end": 128,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 120,
                                    "end": 128,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 122,
                                      "end": 128
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Identifier",
                                  "start": 131,
                                  "end": 132,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 72,
              "end": 87,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 78,
                "end": 87,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 12,
          "end": 62,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 14,
              "end": 15,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 17,
              "end": 18,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 62,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 22,
              "end": 62,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 24,
                  "end": 46,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 27,
                      "end": 45,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 27,
                          "end": 33
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 36,
                          "end": 45
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 47,
                  "end": 60,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 50,
                      "end": 60,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 53,
                        "end": 60,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 56,
                          "end": 60
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
