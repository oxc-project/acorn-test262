__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 327,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "Narrow",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 27,
              "name": "narrowed",
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
              "start": 27,
              "end": 36,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              }
            },
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
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 47,
                "end": 53
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 55,
      "end": 127,
      "test": {
        "type": "BinaryExpression",
        "start": 59,
        "end": 78,
        "left": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 72,
          "end": 78,
          "name": "Narrow",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 80,
        "end": 127,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 97,
            "expression": {
              "type": "MemberExpression",
              "start": 86,
              "end": 96,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 88,
                "end": 96,
                "name": "narrowed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 108,
            "end": 116,
            "expression": {
              "type": "AssignmentExpression",
              "start": 108,
              "end": 115,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 112,
                "end": 115,
                "value": 123,
                "raw": "123"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 129,
      "end": 192,
      "test": {
        "type": "BinaryExpression",
        "start": 133,
        "end": 154,
        "left": {
          "type": "UnaryExpression",
          "start": 133,
          "end": 141,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 154,
          "value": "number",
          "raw": "'number'"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 156,
        "end": 192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 174,
            "expression": {
              "type": "CallExpression",
              "start": 162,
              "end": 173,
              "callee": {
                "type": "MemberExpression",
                "start": 162,
                "end": 171,
                "object": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 171,
                  "name": "toFixed",
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
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 214,
            "name": "b",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 216,
      "end": 326,
      "test": {
        "type": "BinaryExpression",
        "start": 220,
        "end": 241,
        "left": {
          "type": "UnaryExpression",
          "start": 220,
          "end": 228,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 233,
          "end": 241,
          "value": "object",
          "raw": "'object'"
        }
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
            "expression": {
              "type": "CallExpression",
              "start": 248,
              "end": 260,
              "callee": {
                "type": "MemberExpression",
                "start": 248,
                "end": 258,
                "object": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 258,
                  "name": "toString",
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
      "alternate": {
        "type": "BlockStatement",
        "start": 290,
        "end": 326,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 308,
            "expression": {
              "type": "CallExpression",
              "start": 295,
              "end": 307,
              "callee": {
                "type": "MemberExpression",
                "start": 295,
                "end": 305,
                "object": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 305,
                  "name": "toString",
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
