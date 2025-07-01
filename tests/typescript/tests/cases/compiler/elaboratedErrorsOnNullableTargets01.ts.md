__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 22,
                      "end": 26
                    },
                    {
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 31,
                            "end": 34
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
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
                                        "name": "bar",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 38,
                                        "end": 41
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSUnionType",
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
                                          ],
                                          "start": 43,
                                          "end": 56
                                        },
                                        "start": 41,
                                        "end": 56
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 38,
                                      "end": 56
                                    }
                                  ],
                                  "start": 36,
                                  "end": 58
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 61,
                                  "end": 70
                                }
                              ],
                              "start": 36,
                              "end": 70
                            },
                            "start": 34,
                            "end": 70
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 31,
                          "end": 70
                        }
                      ],
                      "start": 29,
                      "end": 72
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 75,
                      "end": 84
                    }
                  ],
                  "start": 22,
                  "end": 84
                },
                "start": 20,
                "end": 84
              },
              "start": 19,
              "end": 84
            },
            "init": null,
            "definite": false,
            "start": 19,
            "end": 84
          }
        ],
        "declare": true,
        "start": 7,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 85
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 113
                      },
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
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 117,
                                "end": 120
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
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
                                  ],
                                  "start": 122,
                                  "end": 140
                                },
                                "start": 120,
                                "end": 140
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 117,
                              "end": 140
                            }
                          ],
                          "start": 115,
                          "end": 142
                        },
                        "start": 113,
                        "end": 142
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 110,
                      "end": 142
                    }
                  ],
                  "start": 108,
                  "end": 144
                },
                "start": 106,
                "end": 144
              },
              "start": 105,
              "end": 144
            },
            "init": null,
            "definite": false,
            "start": 105,
            "end": 144
          }
        ],
        "declare": true,
        "start": 93,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 86,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 148
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 152
        },
        "start": 147,
        "end": 152
      },
      "directive": null,
      "start": 147,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 156
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 160
        },
        "start": 155,
        "end": 160
      },
      "directive": null,
      "start": 155,
      "end": 161
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
