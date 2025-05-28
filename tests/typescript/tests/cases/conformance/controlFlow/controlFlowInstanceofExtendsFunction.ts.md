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
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "now",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 83,
              "end": 92,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 99,
          "end": 131,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
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
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 207,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 185,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "now",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 185,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 191,
            "end": 205,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "why",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 205,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 205,
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
      "type": "ClassDeclaration",
      "start": 209,
      "end": 221,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 216,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 217,
        "end": 221,
        "body": []
      },
      "abstract": false,
      "declare": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 231,
            "end": 234,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "decorators": [],
                "name": "now",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 276,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "now",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        ],
        "optional": false
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 321,
            "end": 370,
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
                        "optional": false,
                        "typeAnnotation": null
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
              }
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
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 348,
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
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
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 389,
          "end": 390,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 403,
                  "decorators": [],
                  "name": "why",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
