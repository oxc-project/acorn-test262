__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 84,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 41,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 66,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 65,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 58,
                "end": 65
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 82,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 81,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 74,
                "end": 81
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
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 96,
        "end": 108,
        "typeName": {
          "type": "Identifier",
          "start": 96,
          "end": 100,
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 100,
          "end": 108,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 101,
              "end": 102,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSLiteralType",
              "start": 104,
              "end": 107,
              "literal": {
                "type": "Literal",
                "start": 104,
                "end": 107,
                "value": "a",
                "raw": "'a'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 122,
          "end": 126,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 126,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 128,
        "end": 259,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 134,
            "end": 148,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 147,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 144,
                  "end": 147,
                  "object": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "decorators": [],
                    "name": "b",
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
            "start": 153,
            "end": 167,
            "expression": {
              "type": "AssignmentExpression",
              "start": 153,
              "end": 166,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 153,
                "end": 156,
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 159,
                "end": 166,
                "value": "hello",
                "raw": "\"hello\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 172,
            "end": 188,
            "expression": {
              "type": "AssignmentExpression",
              "start": 172,
              "end": 187,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 172,
                "end": 175,
                "object": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 178,
                "end": 187,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 194,
            "end": 208,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 200,
                "end": 207,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 204,
                  "end": 207,
                  "object": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "decorators": [],
                    "name": "c",
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
            "start": 213,
            "end": 224,
            "expression": {
              "type": "AssignmentExpression",
              "start": 213,
              "end": 223,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 213,
                "end": 216,
                "object": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 219,
                "end": 223,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 230,
            "end": 244,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 236,
                "end": 243,
                "id": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 240,
                  "end": 243,
                  "object": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "decorators": [],
                    "name": "d",
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
            "start": 249,
            "end": 257,
            "expression": {
              "type": "AssignmentExpression",
              "start": 249,
              "end": 256,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 249,
                "end": 252,
                "object": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
