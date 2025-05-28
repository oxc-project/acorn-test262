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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 22,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 22,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 22,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 48,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 38,
            "end": 47,
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            }
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true
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
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 72,
              "end": 75
            },
            "expression": {
              "type": "MemberExpression",
              "start": 76,
              "end": 81,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 111,
              "end": 114
            }
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true
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
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 147,
              "end": 150
            },
            "expression": {
              "type": "MemberExpression",
              "start": 151,
              "end": 156,
              "object": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "computed": false
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
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 258,
            "end": 261
          },
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "computed": false
            }
          }
        },
        "property": {
          "type": "Identifier",
          "start": 270,
          "end": 276,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 285,
                "end": 288,
                "value": "m",
                "raw": "\"m\""
              },
              "optional": true,
              "computed": true
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
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 308,
            "end": 311
          },
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
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 318,
                "end": 321,
                "value": "m",
                "raw": "\"m\""
              },
              "optional": true,
              "computed": true
            }
          }
        },
        "property": {
          "type": "Identifier",
          "start": 324,
          "end": 330,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
