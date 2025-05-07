__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 314,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 314,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 314,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 19,
              "name": "prop"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 23,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 47,
              "name": "propStatic"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 312,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 64,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 312,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 312,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 85,
                    "end": 110,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 91,
                        "end": 109,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 94,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 97,
                          "end": 109,
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "start": 99,
                              "end": 107,
                              "argument": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 107,
                                "decorators": [],
                                "name": "other",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 129,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 119,
                      "end": 128,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 122,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 123,
                        "end": 128,
                        "name": "prop"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 138,
                    "end": 164,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 144,
                        "end": 163,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 144,
                          "end": 155,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 146,
                              "end": 153,
                              "argument": {
                                "type": "Identifier",
                                "start": 149,
                                "end": 153,
                                "decorators": [],
                                "name": "rest",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 163,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 184,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 173,
                      "end": 183,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 177,
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 178,
                        "end": 183,
                        "name": "prop"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 194,
                    "end": 219,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 218,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 207,
                          "decorators": [],
                          "name": "statics",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 210,
                          "end": 218,
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "start": 212,
                              "end": 217,
                              "argument": {
                                "type": "Identifier",
                                "start": 216,
                                "end": 217,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 228,
                    "end": 247,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 228,
                      "end": 247,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 235,
                        "decorators": [],
                        "name": "statics",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 236,
                        "end": 247,
                        "name": "propStatic"
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 256,
                    "end": 279,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 262,
                        "end": 278,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 262,
                          "end": 274,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 264,
                              "end": 272,
                              "argument": {
                                "type": "Identifier",
                                "start": 267,
                                "end": 272,
                                "decorators": [],
                                "name": "sRest",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 288,
                    "end": 306,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 288,
                      "end": 305,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 293,
                        "decorators": [],
                        "name": "sRest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 294,
                        "end": 305,
                        "name": "propStatic"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 73,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 72,
                      "end": 73,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
