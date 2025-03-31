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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Sammy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 39,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "start": 42,
            "end": 76,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 69,
                        "end": 70,
                        "value": 1,
                        "raw": "1"
                      }
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
      "type": "TSModuleDeclaration",
      "start": 79,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "name": "Sammy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 109,
                  "end": 114,
                  "id": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "JQueryStatic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "sammy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "Sammy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 200,
            "name": "$",
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
                  "name": "JQueryStatic",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 233,
            "name": "instanceOfClassSammy",
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
                  "name": "Sammy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "$",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 242,
                "end": 247,
                "name": "sammy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "instanceOfClassSammy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 300,
                "end": 303,
                "name": "foo",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 329,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "$",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 339,
                  "name": "sammy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "name": "foo",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 353,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "$",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 363,
                  "name": "sammy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 367,
                "name": "bar",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "$",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 391,
                "end": 396,
                "name": "sammy",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "Sammy",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 419,
            "name": "bar",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
