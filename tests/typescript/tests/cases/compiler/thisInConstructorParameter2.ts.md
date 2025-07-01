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
        "name": "P",
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 18,
              "end": 22
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
            "end": 23
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 39,
              "end": 43
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 28,
            "end": 44
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 61
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 70
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 73,
                      "end": 77
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 77
                  },
                  "readonly": false,
                  "static": false,
                  "start": 62,
                  "end": 77
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 81
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 84,
                    "end": 88
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 88
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zzz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 93
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 98
                        },
                        "right": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 97,
                        "end": 105
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ThisExpression",
                      "start": 110,
                      "end": 114
                    },
                    "id": null,
                    "generator": false,
                    "start": 96,
                    "end": 114
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 114
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zzz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 129
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 133,
                              "end": 134
                            },
                            "right": {
                              "type": "ThisExpression",
                              "start": 137,
                              "end": 141
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 133,
                            "end": 141
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "ThisExpression",
                          "start": 146,
                          "end": 150
                        },
                        "id": null,
                        "generator": false,
                        "start": 132,
                        "end": 150
                      },
                      "start": 126,
                      "end": 150
                    },
                    "directive": null,
                    "start": 126,
                    "end": 151
                  }
                ],
                "start": 116,
                "end": 157
              },
              "expression": false,
              "start": 61,
              "end": 157
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 50,
            "end": 157
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 169
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 172,
                    "end": 176
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 176
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 182
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 184
                      },
                      "optional": false,
                      "computed": false,
                      "start": 180,
                      "end": 184
                    },
                    "directive": null,
                    "start": 180,
                    "end": 185
                  }
                ],
                "start": 178,
                "end": 187
              },
              "expression": false,
              "start": 166,
              "end": 187
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 187
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 202
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 205
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 208,
                    "end": 212
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 212
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 218
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 216,
                      "end": 220
                    },
                    "directive": null,
                    "start": 216,
                    "end": 221
                  }
                ],
                "start": 214,
                "end": 223
              },
              "expression": false,
              "start": 202,
              "end": 223
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 192,
            "end": 223
          }
        ],
        "start": 8,
        "end": 225
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 225
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 225
}
```
