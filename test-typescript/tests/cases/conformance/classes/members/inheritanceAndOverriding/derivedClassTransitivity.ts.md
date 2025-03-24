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
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 136,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 134,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 134,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 123,
                      "end": 129
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 134,
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
      "start": 138,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 171,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 171,
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
      "start": 200,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 243,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 227,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 243,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 228,
                  "end": 238,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 230,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 232,
                      "end": 238
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 243,
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
      "type": "VariableDeclaration",
      "start": 280,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 288,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 288,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 288,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 287,
                "end": 288,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "name": "C",
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
      "start": 290,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "name": "D",
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
      "start": 300,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 308,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 308,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 307,
                "end": 308,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "name": "E",
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
      "type": "ExpressionStatement",
      "start": 310,
      "end": 316,
      "expression": {
        "type": "AssignmentExpression",
        "start": 310,
        "end": 315,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 310,
          "end": 311,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 325,
            "end": 333,
            "callee": {
              "type": "MemberExpression",
              "start": 325,
              "end": 330,
              "object": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 327,
                "end": 330,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 331,
                "end": 332,
                "value": 1,
                "raw": "1"
              }
            ],
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
      "start": 335,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 344,
            "end": 353,
            "callee": {
              "type": "MemberExpression",
              "start": 344,
              "end": 349,
              "object": {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 346,
                "end": 349,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 350,
                "end": 352,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
