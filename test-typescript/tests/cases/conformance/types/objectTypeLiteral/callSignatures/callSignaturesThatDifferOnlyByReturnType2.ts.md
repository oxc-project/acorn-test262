__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 175,
  "end": 347,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 175,
      "end": 216,
      "body": {
        "type": "TSInterfaceBody",
        "start": 190,
        "end": 216,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 196,
            "end": 214,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 200,
                "end": 209,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 203,
                    "end": 209
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 186,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 186,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 187,
            "end": 188,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 262,
      "body": {
        "type": "TSInterfaceBody",
        "start": 259,
        "end": 262,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 238,
          "end": 247,
          "expression": {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "decorators": [],
            "name": "I",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 239,
            "end": 247,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 240,
                "end": 246
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 249,
          "end": 258,
          "expression": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "I",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 250,
            "end": 258,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 251,
                "end": 257
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 272,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
      "start": 288,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 304,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 296,
            "end": 304,
            "arguments": [
              {
                "type": "Literal",
                "start": 302,
                "end": 303,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 296,
              "end": 301,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 296,
                "end": 297,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 298,
                "end": 301,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 327,
            "end": 336,
            "arguments": [
              {
                "type": "Literal",
                "start": 333,
                "end": 335,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 327,
              "end": 332,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 329,
                "end": 332,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
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
