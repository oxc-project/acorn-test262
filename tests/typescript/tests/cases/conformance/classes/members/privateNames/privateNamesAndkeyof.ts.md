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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 23,
              "name": "fooField"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 3,
              "raw": "3"
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
            "type": "MethodDefinition",
            "start": 33,
            "end": 49,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 33,
              "end": 43,
              "name": "fooMethod"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 49,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 49,
                "body": []
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
            "start": 55,
            "end": 83,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 59,
              "end": 67,
              "name": "fooProp"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 83,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 1,
                      "raw": "1"
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 120,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 93,
              "end": 101,
              "name": "fooProp"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 120,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 120,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 134,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 132,
              "end": 133,
              "value": 3,
              "raw": "3"
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
            "start": 139,
            "end": 147,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 146,
              "value": 3,
              "raw": "3"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 214,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 213,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 208,
            "end": 213,
            "value": "bar",
            "raw": "\"bar\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 231,
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
          "value": "baz",
          "raw": "\"baz\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 255,
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
          "value": "#fooField",
          "raw": "\"#fooField\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 282,
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
          "value": "#fooMethod",
          "raw": "\"#fooMethod\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 307,
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
          "value": "#fooProp",
          "raw": "\"#fooProp\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 318,
      "end": 333,
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
          "value": "fooField",
          "raw": "\"fooField\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 359,
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
          "value": "fooMethod",
          "raw": "\"fooMethod\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 383,
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
          "value": "fooProp",
          "raw": "\"fooProp\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
