__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 63,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 78,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 75,
        "decorators": [],
        "name": "klass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 78,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 103,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 100,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 133,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 114,
          "end": 118,
          "local": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 120,
          "end": 125,
          "local": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "decorators": [],
            "name": "klass",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "decorators": [],
            "name": "klass",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 127,
          "end": 130,
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 172,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 142,
        "end": 172,
        "id": {
          "type": "Identifier",
          "start": 151,
          "end": 167,
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 170,
          "end": 172,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 73,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 72,
        "value": "./spreadExpressionContextualTypeWithNamespace_0",
        "raw": "\"./spreadExpressionContextualTypeWithNamespace_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 86,
      "expression": {
        "type": "MemberExpression",
        "start": 75,
        "end": 85,
        "object": {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 99,
      "expression": {
        "type": "MemberExpression",
        "start": 87,
        "end": 98,
        "object": {
          "type": "Identifier",
          "start": 87,
          "end": 92,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 93,
          "end": 98,
          "decorators": [],
          "name": "klass",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 110,
      "expression": {
        "type": "MemberExpression",
        "start": 100,
        "end": 109,
        "object": {
          "type": "Identifier",
          "start": 100,
          "end": 105,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 106,
          "end": 109,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 134,
      "expression": {
        "type": "MemberExpression",
        "start": 111,
        "end": 133,
        "object": {
          "type": "Identifier",
          "start": 111,
          "end": 116,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 117,
          "end": 133,
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 136,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 153,
        "decorators": [],
        "name": "getStuff",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 276,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 163,
            "end": 190,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 169,
                "end": 189,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 174,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 193,
            "end": 204,
            "expression": {
              "type": "MemberExpression",
              "start": 193,
              "end": 203,
              "object": {
                "type": "Identifier",
                "start": 193,
                "end": 198,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 199,
                "end": 203,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 219,
            "expression": {
              "type": "MemberExpression",
              "start": 207,
              "end": 218,
              "object": {
                "type": "Identifier",
                "start": 207,
                "end": 212,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 213,
                "end": 218,
                "decorators": [],
                "name": "klass",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 222,
            "end": 232,
            "expression": {
              "type": "MemberExpression",
              "start": 222,
              "end": 231,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 227,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 231,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 235,
            "end": 258,
            "expression": {
              "type": "MemberExpression",
              "start": 235,
              "end": 257,
              "object": {
                "type": "Identifier",
                "start": 235,
                "end": 240,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 241,
                "end": 257,
                "decorators": [],
                "name": "exportedDirectly",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 294,
      "expression": {
        "type": "MemberExpression",
        "start": 278,
        "end": 293,
        "object": {
          "type": "CallExpression",
          "start": 278,
          "end": 288,
          "callee": {
            "type": "Identifier",
            "start": 278,
            "end": 286,
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 289,
          "end": 293,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 312,
      "expression": {
        "type": "MemberExpression",
        "start": 295,
        "end": 311,
        "object": {
          "type": "CallExpression",
          "start": 295,
          "end": 305,
          "callee": {
            "type": "Identifier",
            "start": 295,
            "end": 303,
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 306,
          "end": 311,
          "decorators": [],
          "name": "klass",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 328,
      "expression": {
        "type": "MemberExpression",
        "start": 313,
        "end": 327,
        "object": {
          "type": "CallExpression",
          "start": 313,
          "end": 323,
          "callee": {
            "type": "Identifier",
            "start": 313,
            "end": 321,
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 324,
          "end": 327,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 329,
      "end": 357,
      "expression": {
        "type": "MemberExpression",
        "start": 329,
        "end": 356,
        "object": {
          "type": "CallExpression",
          "start": 329,
          "end": 339,
          "callee": {
            "type": "Identifier",
            "start": 329,
            "end": 337,
            "decorators": [],
            "name": "getStuff",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 340,
          "end": 356,
          "decorators": [],
          "name": "exportedDirectly",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
