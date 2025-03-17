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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "P",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 18,
              "end": 22
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
            "start": 28,
            "end": 44,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 39,
              "end": 43
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
            "start": 50,
            "end": 157,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 157,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "left": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 73,
                      "end": 77
                    },
                    "decorators": [],
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
                  "left": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 81,
                    "name": "zz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 84,
                    "end": 88
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 90,
                  "end": 114,
                  "left": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 93,
                    "name": "zzz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 96,
                    "end": 114,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 97,
                        "end": 105,
                        "left": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "ThisExpression",
                      "start": 110,
                      "end": 114
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                        "name": "zzz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 132,
                        "end": 150,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "start": 133,
                            "end": 141,
                            "left": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "ThisExpression",
                              "start": 137,
                              "end": 141
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "body": {
                          "type": "ThisExpression",
                          "start": 146,
                          "end": 150
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 187,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 187,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 167,
                  "end": 176,
                  "left": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 169,
                    "name": "zz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 172,
                    "end": 176
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                        "name": "zz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 223,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 202,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 223,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 203,
                  "end": 212,
                  "left": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 205,
                    "name": "zz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 208,
                    "end": 212
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                        "name": "zz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
