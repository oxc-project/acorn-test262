__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 461,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 82,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 80,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 461,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 461,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 144,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 144,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 144,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 128,
                    "end": 142,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 135,
                      "end": 141,
                      "object": {
                        "type": "ThisExpression",
                        "start": 135,
                        "end": 139
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 141,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 149,
            "end": 188,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 188,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 188,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 170,
                    "end": 186,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 170,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 170,
                        "end": 176,
                        "object": {
                          "type": "ThisExpression",
                          "start": 170,
                          "end": 174
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 185,
                        "object": {
                          "type": "ThisExpression",
                          "start": 179,
                          "end": 183
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 185,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 227,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 227,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 227,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 211,
                    "end": 225,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 218,
                      "end": 224,
                      "object": {
                        "type": "ThisExpression",
                        "start": 218,
                        "end": 222
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 224,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 270,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 245,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 270,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 248,
                "end": 270,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 250,
                    "end": 268,
                    "argument": {
                      "type": "CallExpression",
                      "start": 257,
                      "end": 267,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 257,
                        "end": 265,
                        "object": {
                          "type": "ThisExpression",
                          "start": 257,
                          "end": 261
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 262,
                          "end": 265,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 276,
            "end": 319,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 319,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 301,
                "end": 319,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 303,
                    "end": 317,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 310,
                      "end": 316,
                      "object": {
                        "type": "ThisExpression",
                        "start": 310,
                        "end": 314
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 316,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 370,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 346,
              "end": 370,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 350,
                "end": 370,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 352,
                    "end": 368,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 352,
                      "end": 367,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 352,
                        "end": 358,
                        "object": {
                          "type": "ThisExpression",
                          "start": 352,
                          "end": 356
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 361,
                        "end": 367,
                        "object": {
                          "type": "ThisExpression",
                          "start": 361,
                          "end": 365
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 367,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 375,
            "end": 416,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 395,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 395,
              "end": 416,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 398,
                "end": 416,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 400,
                    "end": 414,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 407,
                      "end": 413,
                      "object": {
                        "type": "ThisExpression",
                        "start": 407,
                        "end": 411
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 421,
            "end": 459,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 441,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 441,
              "end": 459,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 444,
                "end": 459,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 446,
                    "end": 457,
                    "expression": {
                      "type": "CallExpression",
                      "start": 446,
                      "end": 456,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 446,
                        "end": 454,
                        "object": {
                          "type": "ThisExpression",
                          "start": 446,
                          "end": 450
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 451,
                          "end": 454,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            "accessibility": "protected"
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
