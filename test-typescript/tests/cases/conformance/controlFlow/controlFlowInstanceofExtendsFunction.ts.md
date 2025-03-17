__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 72,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 39,
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 70,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 50,
                  "end": 64,
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 53,
                    "name": "now",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
          "object": {
            "type": "MemberExpression",
            "start": 74,
            "end": 92,
            "object": {
              "type": "Identifier",
              "start": 74,
              "end": 82,
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 83,
              "end": 92,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "name": "now",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 99,
          "end": 131,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "value": "now",
                  "raw": "\"now\""
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 185,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "name": "now",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 191,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "name": "why",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 205,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 205,
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
      "type": "ClassDeclaration",
      "start": 209,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 216,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 217,
        "end": 221,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 243,
      "expression": {
        "type": "CallExpression",
        "start": 223,
        "end": 243,
        "callee": {
          "type": "MemberExpression",
          "start": 223,
          "end": 234,
          "object": {
            "type": "Identifier",
            "start": 223,
            "end": 230,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 231,
            "end": 234,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 235,
            "end": 242,
            "callee": {
              "type": "MemberExpression",
              "start": 235,
              "end": 240,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "name": "now",
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 285,
      "expression": {
        "type": "CallExpression",
        "start": 265,
        "end": 285,
        "callee": {
          "type": "MemberExpression",
          "start": 265,
          "end": 276,
          "object": {
            "type": "Identifier",
            "start": 265,
            "end": 272,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 276,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 277,
            "end": 284,
            "callee": {
              "type": "MemberExpression",
              "start": 277,
              "end": 282,
              "object": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "name": "now",
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 308,
      "end": 370,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 315,
        "end": 370,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 321,
            "end": 370,
            "id": {
              "type": "Identifier",
              "start": 321,
              "end": 334,
              "name": "x",
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
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 328,
                      "end": 334
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ConditionalExpression",
              "start": 337,
              "end": 370,
              "test": {
                "type": "BinaryExpression",
                "start": 337,
                "end": 356,
                "left": {
                  "type": "CallExpression",
                  "start": 337,
                  "end": 350,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 337,
                    "end": 348,
                    "object": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 341,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 348,
                      "name": "random",
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
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "start": 353,
                  "end": 356,
                  "value": 0.5,
                  "raw": "0.5"
                }
              },
              "consequent": {
                "type": "NewExpression",
                "start": 359,
                "end": 366,
                "callee": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "alternate": {
                "type": "Literal",
                "start": 369,
                "end": 370,
                "value": 1,
                "raw": "1"
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 372,
      "end": 425,
      "test": {
        "type": "BinaryExpression",
        "start": 376,
        "end": 390,
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 389,
          "end": 390,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "callee": {
                "type": "MemberExpression",
                "start": 398,
                "end": 403,
                "object": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 403,
                  "name": "why",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
