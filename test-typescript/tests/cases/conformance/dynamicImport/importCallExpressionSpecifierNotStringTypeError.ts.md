__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 381,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 29,
        "name": "getSpecifier",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 40,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 33,
          "end": 40
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 73,
            "name": "whatToLoad",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 73,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 66,
                "end": 73
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 146,
      "expression": {
        "type": "ImportExpression",
        "start": 123,
        "end": 145,
        "source": {
          "type": "CallExpression",
          "start": 130,
          "end": 144,
          "callee": {
            "type": "Identifier",
            "start": 130,
            "end": 142,
            "name": "getSpecifier",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "options": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 156,
            "end": 178,
            "source": {
              "type": "CallExpression",
              "start": 163,
              "end": 177,
              "callee": {
                "type": "Identifier",
                "start": 163,
                "end": 175,
                "name": "getSpecifier",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 191,
            "end": 241,
            "source": {
              "type": "ConditionalExpression",
              "start": 198,
              "end": 240,
              "test": {
                "type": "Identifier",
                "start": 198,
                "end": 208,
                "name": "whatToLoad",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "CallExpression",
                "start": 211,
                "end": 225,
                "callee": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 223,
                  "name": "getSpecifier",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "alternate": {
                "type": "Literal",
                "start": 228,
                "end": 240,
                "value": "defaulPath",
                "raw": "\"defaulPath\""
              }
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 306,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 305,
        "callee": {
          "type": "MemberExpression",
          "start": 242,
          "end": 249,
          "object": {
            "type": "Identifier",
            "start": 242,
            "end": 244,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 250,
            "end": 304,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "name": "zero",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 258,
              "end": 304,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 264,
                  "end": 282,
                  "argument": {
                    "type": "CallExpression",
                    "start": 271,
                    "end": 281,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 271,
                      "end": 279,
                      "object": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 275,
                        "name": "zero",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 279,
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
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 343,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 314,
            "name": "p3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 317,
            "end": 343,
            "source": {
              "type": "ArrayExpression",
              "start": 324,
              "end": 342,
              "elements": [
                {
                  "type": "Literal",
                  "start": 325,
                  "end": 332,
                  "value": "path1",
                  "raw": "\"path1\""
                },
                {
                  "type": "Literal",
                  "start": 334,
                  "end": 341,
                  "value": "path2",
                  "raw": "\"path2\""
                }
              ]
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "name": "p4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 354,
            "end": 380,
            "source": {
              "type": "ArrowFunctionExpression",
              "start": 361,
              "end": 379,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 365,
                "end": 379,
                "value": "PathToModule",
                "raw": "\"PathToModule\""
              },
              "typeParameters": null,
              "returnType": null
            },
            "options": null
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
