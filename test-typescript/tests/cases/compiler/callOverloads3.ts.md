__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 304,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 19,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 18,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 18,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 29,
      "end": 56,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 50,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 50,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 55,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 223,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 223,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 127,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 95,
              "end": 127,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 127,
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
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 221,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 143,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 221,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 221,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 144,
                  "end": 150,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 145,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 147,
                      "end": 150
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
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 255,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 258,
            "end": 272,
            "arguments": [
              {
                "type": "Literal",
                "start": 266,
                "end": 271,
                "raw": "\"hey\"",
                "value": "hey"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 262,
              "end": 265,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 286,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 276,
        "end": 285,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 276,
          "end": 283,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 278,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 279,
            "end": 283,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 293,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 287,
        "end": 292,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 287,
          "end": 290,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 303,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 294,
        "end": 302,
        "arguments": [
          {
            "type": "Literal",
            "start": 298,
            "end": 301,
            "raw": "\"s\"",
            "value": "s"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 294,
          "end": 297,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
