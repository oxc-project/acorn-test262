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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "ff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 12,
          "end": 62,
          "properties": [
            {
              "type": "Property",
              "start": 14,
              "end": 15,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 17,
              "end": 18,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 47,
                  "end": 60,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 50,
                      "end": 60,
                      "typeParameters": null,
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
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 145,
        "body": [
          {
            "type": "IfStatement",
            "start": 68,
            "end": 143,
            "test": {
              "type": "BinaryExpression",
              "start": 72,
              "end": 87,
              "left": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 78,
                "end": 87,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 89,
              "end": 143,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 95,
                  "end": 139,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 95,
                    "end": 139,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ArrowFunctionExpression",
                      "start": 99,
                      "end": 139,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 119,
                                  "end": 128,
                                  "name": "x",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 120,
                                    "end": 128,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 122,
                                      "end": 128
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "Identifier",
                                  "start": 131,
                                  "end": 132,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
