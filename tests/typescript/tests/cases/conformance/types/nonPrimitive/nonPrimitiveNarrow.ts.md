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
        "name": "Narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "narrowed",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              },
              "start": 27,
              "end": 36
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 19,
            "end": 36
          }
        ],
        "start": 13,
        "end": 38
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 44,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 53
        }
      ],
      "declare": false,
      "start": 40,
      "end": 53
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Narrow",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 78
        },
        "start": 59,
        "end": 78
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "narrowed",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 96
              },
              "optional": false,
              "computed": false,
              "start": 86,
              "end": 96
            },
            "directive": null,
            "start": 86,
            "end": 97
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 112,
                "end": 115
              },
              "start": 108,
              "end": 115
            },
            "directive": null,
            "start": 108,
            "end": 116
          }
        ],
        "start": 80,
        "end": 127
      },
      "alternate": null,
      "start": 55,
      "end": 127
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 141
          },
          "prefix": true,
          "start": 133,
          "end": 141
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "'number'",
          "start": 146,
          "end": 154
        },
        "start": 133,
        "end": 154
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 171
                },
                "optional": false,
                "computed": false,
                "start": 162,
                "end": 171
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 162,
              "end": 173
            },
            "directive": null,
            "start": 162,
            "end": 174
          }
        ],
        "start": 156,
        "end": 192
      },
      "alternate": null,
      "start": 129,
      "end": 192
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 201,
                "end": 214
              },
              "start": 199,
              "end": 214
            },
            "start": 198,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 198,
          "end": 214
        }
      ],
      "declare": false,
      "start": 194,
      "end": 214
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 228
          },
          "prefix": true,
          "start": 220,
          "end": 228
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "'object'",
          "start": 233,
          "end": 241
        },
        "start": 220,
        "end": 241
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 249
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 258
                },
                "optional": false,
                "computed": false,
                "start": 248,
                "end": 258
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 248,
              "end": 260
            },
            "directive": null,
            "start": 248,
            "end": 261
          }
        ],
        "start": 243,
        "end": 284
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 305
                },
                "optional": false,
                "computed": false,
                "start": 295,
                "end": 305
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 295,
              "end": 307
            },
            "directive": null,
            "start": 295,
            "end": 308
          }
        ],
        "start": 290,
        "end": 326
      },
      "start": 216,
      "end": 326
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 326
}
```
