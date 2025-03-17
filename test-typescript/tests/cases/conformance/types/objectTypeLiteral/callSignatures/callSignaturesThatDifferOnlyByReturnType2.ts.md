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
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 186,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 186,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 187,
            "end": 188,
            "name": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 190,
        "end": 216,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 196,
            "end": 214,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 200,
                "end": 209,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 203,
                    "end": 209
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 238,
          "end": 247,
          "expression": {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
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
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
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
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 259,
        "end": 262,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 272,
            "name": "x",
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
                  "name": "A",
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
      "start": 288,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 296,
            "end": 304,
            "callee": {
              "type": "MemberExpression",
              "start": 296,
              "end": 301,
              "object": {
                "type": "Identifier",
                "start": 296,
                "end": 297,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 298,
                "end": 301,
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
                "start": 302,
                "end": 303,
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
      "start": 318,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 327,
            "end": 336,
            "callee": {
              "type": "MemberExpression",
              "start": 327,
              "end": 332,
              "object": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 329,
                "end": 332,
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
                "start": 333,
                "end": 335,
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
