__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 19,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 84,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 84,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 22,
                  "end": 84,
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 22,
                      "end": 26
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 29,
                      "end": 72,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 31,
                          "end": 70,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 31,
                            "end": 34,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 34,
                            "end": 70,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 36,
                              "end": 70,
                              "types": [
                                {
                                  "type": "TSTypeLiteral",
                                  "start": 36,
                                  "end": 58,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 38,
                                      "end": 56,
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 38,
                                        "end": 41,
                                        "name": "bar",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 41,
                                        "end": 56,
                                        "typeAnnotation": {
                                          "type": "TSUnionType",
                                          "start": 43,
                                          "end": 56,
                                          "types": [
                                            {
                                              "type": "TSStringKeyword",
                                              "start": 43,
                                              "end": 49
                                            },
                                            {
                                              "type": "TSNullKeyword",
                                              "start": 52,
                                              "end": 56
                                            }
                                          ]
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 61,
                                  "end": 70
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 75,
                      "end": 84
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 86,
      "end": 145,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 93,
        "end": 145,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 105,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 144,
              "name": "y",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 106,
                "end": 144,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 108,
                  "end": 144,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 110,
                      "end": 142,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 113,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 113,
                        "end": 142,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 115,
                          "end": 142,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 117,
                              "end": 140,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 117,
                                "end": 120,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 120,
                                "end": 140,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 122,
                                  "end": 140,
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 122,
                                      "end": 128
                                    },
                                    {
                                      "type": "TSUndefinedKeyword",
                                      "start": 131,
                                      "end": 140
                                    }
                                  ]
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 153,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 152,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 151,
          "end": 152,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 155,
        "end": 160,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 159,
          "end": 160,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
