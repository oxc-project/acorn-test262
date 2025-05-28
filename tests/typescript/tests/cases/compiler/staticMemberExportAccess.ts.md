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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 39,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "hi",
                      "raw": "\"hi\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 76,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 76,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "start": 69,
                        "end": 70,
                        "value": 1,
                        "raw": "1"
                      },
                      "prefix": true
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 79,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 117,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 115,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 105,
              "end": 115,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 109,
                  "end": 114,
                  "id": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 113,
                    "end": 114,
                    "value": 1,
                    "raw": "1"
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 118,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 140,
        "decorators": [],
        "name": "JQueryStatic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 152,
              "decorators": [],
              "name": "sammy",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 201,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 200,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 250,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 249,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 236,
            "end": 249,
            "callee": {
              "type": "MemberExpression",
              "start": 240,
              "end": 247,
              "object": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 242,
                "end": 247,
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "type": "VariableDeclaration",
      "start": 270,
      "end": 306,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 305,
            "callee": {
              "type": "MemberExpression",
              "start": 279,
              "end": 303,
              "object": {
                "type": "Identifier",
                "start": 279,
                "end": 299,
                "decorators": [],
                "name": "instanceOfClassSammy",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 300,
                "end": 303,
                "decorators": [],
                "name": "foo",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 346,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 329,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 332,
            "end": 345,
            "callee": {
              "type": "MemberExpression",
              "start": 332,
              "end": 343,
              "object": {
                "type": "MemberExpression",
                "start": 332,
                "end": 339,
                "object": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 333,
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 339,
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "decorators": [],
                "name": "foo",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 370,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 369,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 353,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 369,
            "callee": {
              "type": "MemberExpression",
              "start": 356,
              "end": 367,
              "object": {
                "type": "MemberExpression",
                "start": 356,
                "end": 363,
                "object": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 357,
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 363,
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 367,
                "decorators": [],
                "name": "bar",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 399,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 398,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 389,
            "end": 398,
            "object": {
              "type": "MemberExpression",
              "start": 389,
              "end": 396,
              "object": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 391,
                "end": 396,
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 410,
      "end": 422,
      "expression": {
        "type": "CallExpression",
        "start": 410,
        "end": 421,
        "callee": {
          "type": "MemberExpression",
          "start": 410,
          "end": 419,
          "object": {
            "type": "Identifier",
            "start": 410,
            "end": 415,
            "decorators": [],
            "name": "Sammy",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "decorators": [],
            "name": "bar",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
