__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 392,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 23,
              "name": "fooField"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 33,
              "end": 43,
              "name": "fooMethod"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 49,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 59,
              "end": 67,
              "name": "fooProp"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 83,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 72,
                    "end": 81,
                    "argument": {
                      "type": "Literal",
                      "start": 79,
                      "end": 80,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 93,
              "end": 101,
              "name": "fooProp"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 120,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 120,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 115,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 132,
              "end": 133,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 146,
              "raw": "3",
              "value": 3
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 205,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 198,
                "end": 205,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 205,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 208,
            "end": 213,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 231,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 221,
        "end": 230,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 225,
          "end": 230,
          "raw": "\"baz\"",
          "value": "baz"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 255,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 239,
        "end": 254,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 243,
          "end": 254,
          "raw": "\"#fooField\"",
          "value": "#fooField"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 282,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 265,
        "end": 281,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 265,
          "end": 266,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 269,
          "end": 281,
          "raw": "\"#fooMethod\"",
          "value": "#fooMethod"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 307,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 292,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 296,
          "end": 306,
          "raw": "\"#fooProp\"",
          "value": "#fooProp"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 318,
      "end": 333,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 318,
        "end": 332,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 318,
          "end": 319,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 322,
          "end": 332,
          "raw": "\"fooField\"",
          "value": "fooField"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 359,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 343,
        "end": 358,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 343,
          "end": 344,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 347,
          "end": 358,
          "raw": "\"fooMethod\"",
          "value": "fooMethod"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 383,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 382,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 369,
          "end": 370,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 373,
          "end": 382,
          "raw": "\"fooProp\"",
          "value": "fooProp"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
