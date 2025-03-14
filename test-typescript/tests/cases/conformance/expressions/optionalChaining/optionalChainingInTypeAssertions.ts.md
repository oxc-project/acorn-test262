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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 22,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 22,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 22,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 38,
            "end": 47,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "arguments": [],
          "callee": {
            "type": "TSAsExpression",
            "start": 51,
            "end": 63,
            "expression": {
              "type": "MemberExpression",
              "start": 51,
              "end": 56,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 54,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            }
          },
          "optional": true
        }
      }
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
          "arguments": [],
          "callee": {
            "type": "TSTypeAssertion",
            "start": 71,
            "end": 81,
            "expression": {
              "type": "MemberExpression",
              "start": 76,
              "end": 81,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 72,
              "end": 75
            }
          },
          "optional": true
        }
      }
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
          "arguments": [],
          "callee": {
            "type": "TSAsExpression",
            "start": 102,
            "end": 114,
            "expression": {
              "type": "MemberExpression",
              "start": 102,
              "end": 107,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 105,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 111,
              "end": 114
            }
          },
          "optional": true
        }
      }
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
          "arguments": [],
          "callee": {
            "type": "TSTypeAssertion",
            "start": 146,
            "end": 156,
            "expression": {
              "type": "MemberExpression",
              "start": 151,
              "end": 156,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 147,
              "end": 150
            }
          },
          "optional": true
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 255,
      "expression": {
        "type": "MemberExpression",
        "start": 232,
        "end": 254,
        "computed": false,
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
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 233,
                "end": 236,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 243,
            "end": 246
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 248,
          "end": 254,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 277,
      "expression": {
        "type": "MemberExpression",
        "start": 256,
        "end": 276,
        "computed": false,
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
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 262,
                "end": 265,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 258,
            "end": 261
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 270,
          "end": 276,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 305,
      "expression": {
        "type": "MemberExpression",
        "start": 278,
        "end": 304,
        "computed": false,
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
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "start": 285,
                "end": 288,
                "raw": "\"m\"",
                "value": "m"
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 293,
            "end": 296
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 298,
          "end": 304,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 331,
      "expression": {
        "type": "MemberExpression",
        "start": 306,
        "end": 330,
        "computed": false,
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
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 312,
                "end": 315,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "start": 318,
                "end": 321,
                "raw": "\"m\"",
                "value": "m"
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 308,
            "end": 311
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 324,
          "end": 330,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
