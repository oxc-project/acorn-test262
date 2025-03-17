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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "StringTree",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 27,
              "end": 47,
              "name": "StringTreeCollection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 79,
        "name": "StringTreeCollectionBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 112,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 86,
            "end": 110,
            "parameters": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 96,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 109,
                  "name": "StringTree",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
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
      "start": 114,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 140,
        "name": "StringTreeCollection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 149,
        "end": 173,
        "name": "StringTreeCollectionBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 177,
        "body": []
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
      "start": 179,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 196,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 196,
                  "name": "StringTree",
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
      "type": "IfStatement",
      "start": 198,
      "end": 280,
      "test": {
        "type": "BinaryExpression",
        "start": 202,
        "end": 223,
        "left": {
          "type": "UnaryExpression",
          "start": 202,
          "end": 210,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 215,
          "end": 223,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 225,
        "end": 280,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 231,
            "end": 241,
            "expression": {
              "type": "AssignmentExpression",
              "start": 231,
              "end": 240,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 231,
                "end": 235,
                "object": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 233,
                  "end": 234,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 238,
                "end": 240,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 278,
            "expression": {
              "type": "AssignmentExpression",
              "start": 246,
              "end": 277,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 246,
                "end": 250,
                "object": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 248,
                  "end": 249,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 253,
                "end": 277,
                "callee": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 277,
                  "name": "StringTreeCollection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
