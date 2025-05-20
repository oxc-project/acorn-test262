__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 326,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 27,
              "decorators": [],
              "name": "narrowed",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 36,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Narrow",
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
      "start": 40,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 47,
                "end": 53
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 55,
      "end": 127,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 80,
        "end": 127,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 97,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 86,
              "end": 96,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 88,
                "end": 96,
                "decorators": [],
                "name": "narrowed",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 108,
            "end": 116,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 108,
              "end": 115,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 112,
                "end": 115,
                "raw": "123",
                "value": 123
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 59,
        "end": 78,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 72,
          "end": 78,
          "decorators": [],
          "name": "Narrow",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 129,
      "end": 192,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 156,
        "end": 192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 174,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 162,
              "end": 173,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 162,
                "end": 171,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 171,
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 133,
        "end": 154,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 133,
          "end": 141,
          "argument": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 154,
          "raw": "'number'",
          "value": "number"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 214,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 214,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 201,
                "end": 214,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 201,
                    "end": 207
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 210,
                    "end": 214
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 216,
      "end": 326,
      "alternate": {
        "type": "BlockStatement",
        "start": 290,
        "end": 326,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 308,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 295,
              "end": 307,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 295,
                "end": 305,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 305,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 243,
        "end": 284,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 248,
            "end": 261,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 248,
              "end": 260,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 248,
                "end": 258,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 258,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 220,
        "end": 241,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 220,
          "end": 228,
          "argument": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 233,
          "end": 241,
          "raw": "'object'",
          "value": "object"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
