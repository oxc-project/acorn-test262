__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 462,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 82,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 80,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "protected"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 461,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 144,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 144,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 149,
            "end": 188,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 227,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 227,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 270,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 245,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 270,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 276,
            "end": 319,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 319,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 370,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 346,
              "end": 370,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 375,
            "end": 416,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 395,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 395,
              "end": 416,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 421,
            "end": 459,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 441,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 441,
              "end": 459,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
            "accessibility": "protected"
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
