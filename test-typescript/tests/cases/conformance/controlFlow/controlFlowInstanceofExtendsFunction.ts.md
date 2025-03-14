controlFlowInstanceofExtendsFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 425,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 72,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 70,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 70,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 50,
                  "end": 64,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 53,
                    "decorators": [],
                    "name": "now",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 57,
                      "end": 63
                    }
                  },
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 39,
              "decorators": [],
              "name": "Function",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 131,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 74,
          "end": 96,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 74,
            "end": 92,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 74,
              "end": 82,
              "decorators": [],
              "name": "Function",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 83,
              "end": 92,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "decorators": [],
            "name": "now",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 99,
          "end": 131,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 111,
            "end": 131,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 117,
                "end": 129,
                "argument": {
                  "type": "Literal",
                  "start": 124,
                  "end": 129,
                  "raw": "\"now\"",
                  "value": "now"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 185,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "now",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 185,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 160,
                "end": 185,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 170,
                    "end": 179,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 177,
                      "end": 179,
                      "properties": []
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
            "start": 191,
            "end": 205,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "why",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 205,
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
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 209,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 217,
        "end": 221,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 216,
        "decorators": [],
        "name": "Y",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 243,
      "expression": {
        "type": "CallExpression",
        "start": 223,
        "end": 243,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 235,
            "end": 242,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 235,
              "end": 240,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "X",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "decorators": [],
                "name": "now",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 223,
          "end": 234,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 223,
            "end": 230,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 231,
            "end": 234,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 285,
      "expression": {
        "type": "CallExpression",
        "start": 265,
        "end": 285,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 277,
            "end": 284,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 277,
              "end": 282,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "Y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "now",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 265,
          "end": 276,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 265,
            "end": 272,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 276,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 308,
      "end": 370,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 315,
        "end": 370,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 321,
            "end": 370,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 321,
              "end": 334,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 322,
                "end": 334,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 324,
                  "end": 334,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 325,
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 325,
                        "decorators": [],
                        "name": "X",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 328,
                      "end": 334
                    }
                  ]
                }
              }
            },
            "init": {
              "type": "ConditionalExpression",
              "start": 337,
              "end": 370,
              "alternate": {
                "type": "Literal",
                "start": 369,
                "end": 370,
                "raw": "1",
                "value": 1
              },
              "consequent": {
                "type": "NewExpression",
                "start": 359,
                "end": 366,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 337,
                "end": 356,
                "operator": ">",
                "left": {
                  "type": "CallExpression",
                  "start": 337,
                  "end": 350,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 337,
                    "end": 348,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 341,
                      "decorators": [],
                      "name": "Math",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 348,
                      "decorators": [],
                      "name": "random",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 353,
                  "end": 356,
                  "raw": "0.5",
                  "value": 0.5
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "IfStatement",
      "start": 372,
      "end": 425,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 392,
        "end": 425,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 398,
            "end": 405,
            "expression": {
              "type": "CallExpression",
              "start": 398,
              "end": 405,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 398,
                "end": 403,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 403,
                  "decorators": [],
                  "name": "why",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 376,
        "end": 390,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 389,
          "end": 390,
          "decorators": [],
          "name": "X",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
