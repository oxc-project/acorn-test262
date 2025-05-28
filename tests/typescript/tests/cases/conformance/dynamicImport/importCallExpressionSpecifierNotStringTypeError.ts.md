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
        "decorators": [],
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 40,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 33,
          "end": 40
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 74,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 73,
            "decorators": [],
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 73,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 66,
                "end": 73
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "options": null,
        "phase": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 179,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 241,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "whatToLoad",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 211,
                "end": 225,
                "callee": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 223,
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "alternate": {
                "type": "Literal",
                "start": 228,
                "end": 240,
                "value": "defaulPath",
                "raw": "\"defaulPath\""
              }
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 250,
            "end": 304,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 279,
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
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 344,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 343,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 314,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
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
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 381,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 354,
            "end": 380,
            "source": {
              "type": "ArrowFunctionExpression",
              "start": 361,
              "end": 379,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 365,
                "end": 379,
                "value": "PathToModule",
                "raw": "\"PathToModule\""
              },
              "id": null,
              "generator": false
            },
            "options": null,
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
