__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 22,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 22,
                "body": []
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
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 38,
            "end": 47,
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 69,
      "expression": {
        "type": "ChainExpression",
        "start": 50,
        "end": 68,
        "expression": {
          "type": "CallExpression",
          "start": 50,
          "end": 68,
          "callee": {
            "type": "TSAsExpression",
            "start": 51,
            "end": 63,
            "expression": {
              "type": "MemberExpression",
              "start": 51,
              "end": 56,
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 54,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            }
          },
          "arguments": [],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 87,
      "expression": {
        "type": "ChainExpression",
        "start": 70,
        "end": 86,
        "expression": {
          "type": "CallExpression",
          "start": 70,
          "end": 86,
          "callee": {
            "type": "TSTypeAssertion",
            "start": 71,
            "end": 81,
            "expression": {
              "type": "MemberExpression",
              "start": 76,
              "end": 81,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 72,
              "end": 75
            }
          },
          "arguments": [],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 132,
      "expression": {
        "type": "ChainExpression",
        "start": 95,
        "end": 131,
        "expression": {
          "type": "CallExpression",
          "start": 95,
          "end": 131,
          "callee": {
            "type": "TSAsExpression",
            "start": 102,
            "end": 114,
            "expression": {
              "type": "MemberExpression",
              "start": 102,
              "end": 107,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 105,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 111,
              "end": 114
            }
          },
          "arguments": [],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 174,
      "expression": {
        "type": "ChainExpression",
        "start": 139,
        "end": 173,
        "expression": {
          "type": "CallExpression",
          "start": 139,
          "end": 173,
          "callee": {
            "type": "TSTypeAssertion",
            "start": 146,
            "end": 156,
            "expression": {
              "type": "MemberExpression",
              "start": 151,
              "end": 156,
              "object": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 147,
              "end": 150
            }
          },
          "arguments": [],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 255,
      "expression": {
        "type": "MemberExpression",
        "start": 232,
        "end": 254,
        "object": {
          "type": "TSAsExpression",
          "start": 233,
          "end": 246,
          "expression": {
            "type": "ChainExpression",
            "start": 233,
            "end": 239,
            "expression": {
              "type": "MemberExpression",
              "start": 233,
              "end": 239,
              "object": {
                "type": "Identifier",
                "start": 233,
                "end": 236,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 243,
            "end": 246
          }
        },
        "property": {
          "type": "Identifier",
          "start": 248,
          "end": 254,
          "name": "length",
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
      "start": 256,
      "end": 277,
      "expression": {
        "type": "MemberExpression",
        "start": 256,
        "end": 276,
        "object": {
          "type": "TSTypeAssertion",
          "start": 257,
          "end": 268,
          "expression": {
            "type": "ChainExpression",
            "start": 262,
            "end": 268,
            "expression": {
              "type": "MemberExpression",
              "start": 262,
              "end": 268,
              "object": {
                "type": "Identifier",
                "start": 262,
                "end": 265,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 258,
            "end": 261
          }
        },
        "property": {
          "type": "Identifier",
          "start": 270,
          "end": 276,
          "name": "length",
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
      "start": 278,
      "end": 305,
      "expression": {
        "type": "MemberExpression",
        "start": 278,
        "end": 304,
        "object": {
          "type": "TSAsExpression",
          "start": 279,
          "end": 296,
          "expression": {
            "type": "ChainExpression",
            "start": 279,
            "end": 289,
            "expression": {
              "type": "MemberExpression",
              "start": 279,
              "end": 289,
              "object": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 285,
                "end": 288,
                "value": "m",
                "raw": "\"m\""
              },
              "computed": true,
              "optional": true
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 293,
            "end": 296
          }
        },
        "property": {
          "type": "Identifier",
          "start": 298,
          "end": 304,
          "name": "length",
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
      "start": 306,
      "end": 331,
      "expression": {
        "type": "MemberExpression",
        "start": 306,
        "end": 330,
        "object": {
          "type": "TSTypeAssertion",
          "start": 307,
          "end": 322,
          "expression": {
            "type": "ChainExpression",
            "start": 312,
            "end": 322,
            "expression": {
              "type": "MemberExpression",
              "start": 312,
              "end": 322,
              "object": {
                "type": "Identifier",
                "start": 312,
                "end": 315,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 318,
                "end": 321,
                "value": "m",
                "raw": "\"m\""
              },
              "computed": true,
              "optional": true
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 308,
            "end": 311
          }
        },
        "property": {
          "type": "Identifier",
          "start": 324,
          "end": 330,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
