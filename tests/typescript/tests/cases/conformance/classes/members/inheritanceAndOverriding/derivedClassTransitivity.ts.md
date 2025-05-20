__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 354,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 136,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 134,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 134,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 123,
                      "end": 129
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 198,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 171,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 171,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 171,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 200,
      "end": 278,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 243,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 227,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 243,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 243,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 228,
                  "end": 238,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 230,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 232,
                      "end": 238
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 288,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 288,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 288,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 287,
                "end": 288,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 290,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 298,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 300,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 308,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 307,
                "end": 308,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 310,
      "end": 316,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 310,
        "end": 315,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 310,
          "end": 311,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 325,
            "end": 333,
            "arguments": [
              {
                "type": "Literal",
                "start": 331,
                "end": 332,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 325,
              "end": 330,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 327,
                "end": 330,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 353,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 344,
            "end": 353,
            "arguments": [
              {
                "type": "Literal",
                "start": 350,
                "end": 352,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 344,
              "end": 349,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 346,
                "end": 349,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
