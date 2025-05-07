__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 280,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 48,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "StringTree",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 18,
        "end": 47,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 18,
            "end": 24
          },
          {
            "type": "TSTypeReference",
            "start": 27,
            "end": 47,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 27,
              "end": 47,
              "decorators": [],
              "name": "StringTreeCollection",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 112,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 112,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 86,
            "end": 110,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 96,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 109,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 109,
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 79,
        "decorators": [],
        "name": "StringTreeCollectionBase",
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
      "start": 114,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 177,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 140,
        "decorators": [],
        "name": "StringTreeCollection",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 149,
        "end": 173,
        "decorators": [],
        "name": "StringTreeCollectionBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 196,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 196,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 196,
                  "decorators": [],
                  "name": "StringTree",
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
      "type": "IfStatement",
      "start": 198,
      "end": 280,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 225,
        "end": 280,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 231,
            "end": 241,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 231,
              "end": 240,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 231,
                "end": 235,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 233,
                  "end": 234,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 238,
                "end": 240,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 278,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 246,
              "end": 277,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 246,
                "end": 250,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 248,
                  "end": 249,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "NewExpression",
                "start": 253,
                "end": 277,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 277,
                  "decorators": [],
                  "name": "StringTreeCollection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 202,
        "end": 223,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 202,
          "end": 210,
          "argument": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 215,
          "end": 223,
          "raw": "\"string\"",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
