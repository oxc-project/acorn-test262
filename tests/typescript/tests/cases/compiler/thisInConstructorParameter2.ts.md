__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 225,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 44,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 157,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 62,
                  "end": 77,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 69,
                    "end": 77,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 73,
                      "end": 77
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 79,
                  "end": 88,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 81,
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 84,
                    "end": 88
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 90,
                  "end": 114,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 93,
                    "decorators": [],
                    "name": "zzz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 96,
                    "end": 114,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 97,
                        "end": 105,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ThisExpression",
                      "start": 110,
                      "end": 114
                    },
                    "id": null,
                    "generator": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 157,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 151,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 150,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 129,
                        "decorators": [],
                        "name": "zzz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 132,
                        "end": 150,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "start": 133,
                            "end": 141,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "ThisExpression",
                              "start": 137,
                              "end": 141
                            },
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "ThisExpression",
                          "start": 146,
                          "end": 150
                        },
                        "id": null,
                        "generator": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 187,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 187,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 167,
                  "end": 176,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 169,
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 172,
                    "end": 176
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 187,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 180,
                    "end": 185,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 180,
                      "end": 184,
                      "object": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 182,
                        "decorators": [],
                        "name": "zz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 223,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 202,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 223,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 203,
                  "end": 212,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 205,
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 208,
                    "end": 212
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 216,
                    "end": 221,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 216,
                      "end": 220,
                      "object": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 218,
                        "decorators": [],
                        "name": "zz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
