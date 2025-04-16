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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 314,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 19,
              "name": "prop"
            },
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 23,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 52,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 47,
              "name": "propStatic"
            },
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 312,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 64,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 312,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 73,
                  "name": "other",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 72,
                      "end": 73,
                      "typeName": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 94,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "other",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 129,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 119,
                      "end": 128,
                      "object": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 122,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 123,
                        "end": 128,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                        "id": {
                          "type": "ObjectPattern",
                          "start": 144,
                          "end": 155,
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 146,
                              "end": 153,
                              "argument": {
                                "type": "Identifier",
                                "start": 149,
                                "end": 153,
                                "name": "rest",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 163,
                          "name": "other",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 184,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 173,
                      "end": 183,
                      "object": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 177,
                        "name": "rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 178,
                        "end": 183,
                        "name": "prop"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 207,
                          "name": "statics",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 228,
                    "end": 247,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 228,
                      "end": 247,
                      "object": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 235,
                        "name": "statics",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 236,
                        "end": 247,
                        "name": "propStatic"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
                        "id": {
                          "type": "ObjectPattern",
                          "start": 262,
                          "end": 274,
                          "properties": [
                            {
                              "type": "RestElement",
                              "start": 264,
                              "end": 272,
                              "argument": {
                                "type": "Identifier",
                                "start": 267,
                                "end": 272,
                                "name": "sRest",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 288,
                    "end": 306,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 288,
                      "end": 305,
                      "object": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 293,
                        "name": "sRest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 294,
                        "end": 305,
                        "name": "propStatic"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
