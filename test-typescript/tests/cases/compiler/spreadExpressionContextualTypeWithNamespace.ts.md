spreadExpressionContextualTypeWithNamespace_0.ts
```json
{
  "type": "Program",
  "start": 45,
  "end": 173,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 63,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 63,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "func",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 78,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 75,
        "decorators": [],
        "name": "klass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 91,
            "end": 102,
            "properties": [
              {
                "type": "Property",
                "start": 93,
                "end": 100,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 100,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 133,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 114,
          "end": 118,
          "exported": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "func",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "func",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 120,
          "end": 125,
          "exported": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "decorators": [],
            "name": "klass",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "decorators": [],
            "name": "klass",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 127,
          "end": 130,
          "exported": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "obj",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 172,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 142,
        "end": 172,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 170,
          "end": 172,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 151,
          "end": 167,
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
spreadExpressionContextualTypeWithNamespace_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 358,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 73,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 72,
        "raw": "\"./spreadExpressionContextualTypeWithNamespace_0\"",
        "value": "./spreadExpressionContextualTypeWithNamespace_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "stuff",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 86,
      "expression": {
        "type": "MemberExpression",
        "start": 75,
        "end": 85,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "stuff",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "decorators": [],
          "name": "func",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 99,
      "expression": {
        "type": "MemberExpression",
        "start": 87,
        "end": 98,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 87,
          "end": 92,
          "decorators": [],
          "name": "stuff",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 93,
          "end": 98,
          "decorators": [],
          "name": "klass",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 110,
      "expression": {
        "type": "MemberExpression",
        "start": 100,
        "end": 109,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 100,
          "end": 105,
          "decorators": [],
          "name": "stuff",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 106,
          "end": 109,
          "decorators": [],
          "name": "obj",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 134,
      "expression": {
        "type": "MemberExpression",
        "start": 111,
        "end": 133,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 111,
          "end": 116,
          "decorators": [],
          "name": "stuff",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 117,
          "end": 133,
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 136,
      "end": 276,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 276,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 163,
            "end": 190,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 169,
                "end": 189,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 174,
                  "decorators": [],
                  "name": "thing",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 177,
                  "end": 189,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 179,
                      "end": 187,
                      "argument": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 187,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 193,
            "end": 204,
            "expression": {
              "type": "MemberExpression",
              "start": 193,
              "end": 203,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 193,
                "end": 198,
                "decorators": [],
                "name": "thing",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 199,
                "end": 203,
                "decorators": [],
                "name": "func",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 219,
            "expression": {
              "type": "MemberExpression",
              "start": 207,
              "end": 218,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 207,
                "end": 212,
                "decorators": [],
                "name": "thing",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 213,
                "end": 218,
                "decorators": [],
                "name": "klass",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 222,
            "end": 232,
            "expression": {
              "type": "MemberExpression",
              "start": 222,
              "end": 231,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 227,
                "decorators": [],
                "name": "thing",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 231,
                "decorators": [],
                "name": "obj",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 235,
            "end": 258,
            "expression": {
              "type": "MemberExpression",
              "start": 235,
              "end": 257,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 240,
                "decorators": [],
                "name": "thing",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 257,
                "decorators": [],
                "name": "exportedDirectly",
                "optional": false
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 261,
            "end": 274,
            "argument": {
              "type": "Identifier",
              "start": 268,
              "end": 273,
              "decorators": [],
              "name": "thing",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 153,
        "decorators": [],
        "name": "getStuff",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 294,
      "expression": {
        "type": "MemberExpression",
        "start": 278,
        "end": 293,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 278,
          "end": 288,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 278,
            "end": 286,
            "decorators": [],
            "name": "getStuff",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 289,
          "end": 293,
          "decorators": [],
          "name": "func",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 312,
      "expression": {
        "type": "MemberExpression",
        "start": 295,
        "end": 311,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 295,
          "end": 305,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 295,
            "end": 303,
            "decorators": [],
            "name": "getStuff",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 306,
          "end": 311,
          "decorators": [],
          "name": "klass",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 328,
      "expression": {
        "type": "MemberExpression",
        "start": 313,
        "end": 327,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 313,
          "end": 323,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 313,
            "end": 321,
            "decorators": [],
            "name": "getStuff",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 324,
          "end": 327,
          "decorators": [],
          "name": "obj",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 329,
      "end": 357,
      "expression": {
        "type": "MemberExpression",
        "start": 329,
        "end": 356,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 329,
          "end": 339,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 329,
            "end": 337,
            "decorators": [],
            "name": "getStuff",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 340,
          "end": 356,
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
