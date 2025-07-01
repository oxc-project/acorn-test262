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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 20,
                "end": 22
              },
              "expression": false,
              "start": 17,
              "end": 22
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 22
          }
        ],
        "start": 10,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 35
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "typeArguments": null,
            "arguments": [],
            "start": 38,
            "end": 47
          },
          "definite": false,
          "start": 32,
          "end": 47
        }
      ],
      "declare": false,
      "start": 26,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "TSAsExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 54
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "optional": false,
              "computed": false,
              "start": 51,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            },
            "start": 51,
            "end": 63
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true,
          "start": 50,
          "end": 68
        },
        "start": 50,
        "end": 68
      },
      "directive": null,
      "start": 50,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 72,
              "end": 75
            },
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 79
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 76,
              "end": 81
            },
            "start": 71,
            "end": 81
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true,
          "start": 70,
          "end": 86
        },
        "start": 70,
        "end": 86
      },
      "directive": null,
      "start": 70,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "TSAsExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 105
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "optional": false,
              "computed": false,
              "start": 102,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 111,
              "end": 114
            },
            "start": 102,
            "end": 114
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true,
          "start": 95,
          "end": 131
        },
        "start": 95,
        "end": 131
      },
      "directive": null,
      "start": 95,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 147,
              "end": 150
            },
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "optional": false,
              "computed": false,
              "start": 151,
              "end": 156
            },
            "start": 146,
            "end": 156
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true,
          "start": 139,
          "end": 173
        },
        "start": 139,
        "end": 173
      },
      "directive": null,
      "start": 139,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 236
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 239
              },
              "optional": true,
              "computed": false,
              "start": 233,
              "end": 239
            },
            "start": 233,
            "end": 239
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 243,
            "end": 246
          },
          "start": 233,
          "end": 246
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 254
        },
        "optional": false,
        "computed": false,
        "start": 232,
        "end": 254
      },
      "directive": null,
      "start": 232,
      "end": 255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 258,
            "end": 261
          },
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "optional": true,
              "computed": false,
              "start": 262,
              "end": 268
            },
            "start": 262,
            "end": 268
          },
          "start": 257,
          "end": 268
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 276
        },
        "optional": false,
        "computed": false,
        "start": 256,
        "end": 276
      },
      "directive": null,
      "start": 256,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 282
              },
              "property": {
                "type": "Literal",
                "value": "m",
                "raw": "\"m\"",
                "start": 285,
                "end": 288
              },
              "optional": true,
              "computed": true,
              "start": 279,
              "end": 289
            },
            "start": 279,
            "end": 289
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 293,
            "end": 296
          },
          "start": 279,
          "end": 296
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 304
        },
        "optional": false,
        "computed": false,
        "start": 278,
        "end": 304
      },
      "directive": null,
      "start": 278,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 308,
            "end": 311
          },
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 315
              },
              "property": {
                "type": "Literal",
                "value": "m",
                "raw": "\"m\"",
                "start": 318,
                "end": 321
              },
              "optional": true,
              "computed": true,
              "start": 312,
              "end": 322
            },
            "start": 312,
            "end": 322
          },
          "start": 307,
          "end": 322
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 330
        },
        "optional": false,
        "computed": false,
        "start": 306,
        "end": 330
      },
      "directive": null,
      "start": 306,
      "end": 331
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 331
}
```
