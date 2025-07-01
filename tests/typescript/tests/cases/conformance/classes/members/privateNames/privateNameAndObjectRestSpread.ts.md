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
        "name": "C",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 14,
              "end": 19
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 22,
              "end": 23
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 24
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "propStatic",
              "start": 36,
              "end": 47
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 50,
              "end": 51
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 29,
            "end": 52
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 64
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
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 73
                      },
                      "typeArguments": null,
                      "start": 72,
                      "end": 73
                    },
                    "start": 70,
                    "end": 73
                  },
                  "start": 65,
                  "end": 73
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 94
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "other",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 107
                              },
                              "start": 99,
                              "end": 107
                            }
                          ],
                          "start": 97,
                          "end": 109
                        },
                        "definite": false,
                        "start": 91,
                        "end": 109
                      }
                    ],
                    "declare": false,
                    "start": 85,
                    "end": 110
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 122
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 123,
                        "end": 128
                      },
                      "optional": false,
                      "computed": false,
                      "start": 119,
                      "end": 128
                    },
                    "directive": null,
                    "start": 119,
                    "end": 129
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 149,
                                "end": 153
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 146,
                              "end": 153
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 155
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 163
                        },
                        "definite": false,
                        "start": 144,
                        "end": 163
                      }
                    ],
                    "declare": false,
                    "start": 138,
                    "end": 164
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 177
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 178,
                        "end": 183
                      },
                      "optional": false,
                      "computed": false,
                      "start": 173,
                      "end": 183
                    },
                    "directive": null,
                    "start": 173,
                    "end": 184
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
                          "name": "statics",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 207
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 216,
                                "end": 217
                              },
                              "start": 212,
                              "end": 217
                            }
                          ],
                          "start": 210,
                          "end": 218
                        },
                        "definite": false,
                        "start": 200,
                        "end": 218
                      }
                    ],
                    "declare": false,
                    "start": 194,
                    "end": 219
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "statics",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 235
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "propStatic",
                        "start": 236,
                        "end": 247
                      },
                      "optional": false,
                      "computed": false,
                      "start": 228,
                      "end": 247
                    },
                    "directive": null,
                    "start": 228,
                    "end": 247
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sRest",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 267,
                                "end": 272
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 264,
                              "end": 272
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 262,
                          "end": 274
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 278
                        },
                        "definite": false,
                        "start": 262,
                        "end": 278
                      }
                    ],
                    "declare": false,
                    "start": 256,
                    "end": 279
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sRest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 293
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "propStatic",
                        "start": 294,
                        "end": 305
                      },
                      "optional": false,
                      "computed": false,
                      "start": 288,
                      "end": 305
                    },
                    "directive": null,
                    "start": 288,
                    "end": 306
                  }
                ],
                "start": 75,
                "end": 312
              },
              "expression": false,
              "start": 64,
              "end": 312
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 312
          }
        ],
        "start": 8,
        "end": 314
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 314
}
```
