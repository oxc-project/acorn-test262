__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTree",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 18,
            "end": 24
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringTreeCollection",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 47
            },
            "typeArguments": null,
            "start": 27,
            "end": 47
          }
        ],
        "start": 18,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeCollectionBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 79
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
                  },
                  "start": 88,
                  "end": 96
                },
                "start": 87,
                "end": 96
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 109
                },
                "typeArguments": null,
                "start": 99,
                "end": 109
              },
              "start": 97,
              "end": 109
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 86,
            "end": 110
          }
        ],
        "start": 80,
        "end": 112
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 140
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeCollectionBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 173
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 174,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 177
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 196
                },
                "typeArguments": null,
                "start": 186,
                "end": 196
              },
              "start": 184,
              "end": 196
            },
            "start": 183,
            "end": 196
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 196
        }
      ],
      "declare": false,
      "start": 179,
      "end": 197
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "prefix": true,
          "start": 202,
          "end": 210
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 215,
          "end": 223
        },
        "start": 202,
        "end": 223
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 232
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 233,
                  "end": 234
                },
                "optional": false,
                "computed": true,
                "start": 231,
                "end": 235
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 238,
                "end": 240
              },
              "start": 231,
              "end": 240
            },
            "directive": null,
            "start": 231,
            "end": 241
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 247
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 248,
                  "end": 249
                },
                "optional": false,
                "computed": true,
                "start": 246,
                "end": 250
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTreeCollection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 277
                },
                "typeArguments": null,
                "arguments": [],
                "start": 253,
                "end": 277
              },
              "start": 246,
              "end": 277
            },
            "directive": null,
            "start": 246,
            "end": 278
          }
        ],
        "start": 225,
        "end": 280
      },
      "alternate": null,
      "start": 198,
      "end": 280
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 280
}
```
