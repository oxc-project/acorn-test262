__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 422,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 39,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 39,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 39,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 25,
                    "end": 37,
                    "argument": {
                      "type": "Literal",
                      "start": 32,
                      "end": 36,
                      "raw": "\"hi\"",
                      "value": "hi"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 76,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 76,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 61,
                    "end": 71,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 68,
                      "end": 70,
                      "argument": {
                        "type": "Literal",
                        "start": 69,
                        "end": 70,
                        "raw": "1",
                        "value": 1
                      },
                      "operator": "-",
                      "prefix": true
                    }
                  }
                ]
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
        "end": 11,
        "decorators": [],
        "name": "Sammy",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 79,
      "end": 117,
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 117,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 115,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 105,
              "end": 115,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 109,
                  "end": 114,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 113,
                    "end": 114,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Sammy",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 118,
      "end": 180,
      "body": {
        "type": "TSInterfaceBody",
        "start": 141,
        "end": 180,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 147,
            "end": 160,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 152,
              "decorators": [],
              "name": "sammy",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 159,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 159,
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 140,
        "decorators": [],
        "name": "JQueryStatic",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 200,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 200,
                  "decorators": [],
                  "name": "JQueryStatic",
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 202,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 233,
            "decorators": [],
            "name": "instanceOfClassSammy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 233,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 233,
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 236,
            "end": 249,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 240,
              "end": 247,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "$",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 242,
                "end": 247,
                "decorators": [],
                "name": "sammy",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 305,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 279,
              "end": 303,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 279,
                "end": 299,
                "decorators": [],
                "name": "instanceOfClassSammy",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 300,
                "end": 303,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 329,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 332,
            "end": 345,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 332,
              "end": 343,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 332,
                "end": 339,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 333,
                  "decorators": [],
                  "name": "$",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 339,
                  "decorators": [],
                  "name": "sammy",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 353,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 369,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 367,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 356,
                "end": 363,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 357,
                  "decorators": [],
                  "name": "$",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 363,
                  "decorators": [],
                  "name": "sammy",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 367,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 398,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 389,
            "end": 398,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 389,
              "end": 396,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "decorators": [],
                "name": "$",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 391,
                "end": 396,
                "decorators": [],
                "name": "sammy",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 410,
      "end": 422,
      "expression": {
        "type": "CallExpression",
        "start": 410,
        "end": 421,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 410,
          "end": 419,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 410,
            "end": 415,
            "decorators": [],
            "name": "Sammy",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
