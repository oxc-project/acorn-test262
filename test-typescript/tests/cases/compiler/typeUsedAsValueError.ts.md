__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 418,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "Interface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 24,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "name": "SomeClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 46,
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
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 74,
        "name": "TypeAliasForSomeClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 77,
        "end": 86,
        "typeName": {
          "type": "Identifier",
          "start": 77,
          "end": 86,
          "name": "SomeClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 88,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 101,
        "name": "someType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 104,
        "end": 117,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 106,
            "end": 115,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 109,
                "end": 115
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
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 144,
        "name": "acceptsSomeType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 156,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 156,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 156,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 156,
                "name": "someType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 162,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 171,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 174,
            "end": 183,
            "name": "Interface",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 192,
            "name": "two",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 195,
            "end": 212,
            "name": "InterfaceNotFound",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 223,
            "name": "three",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 226,
            "end": 247,
            "name": "TypeAliasForSomeClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 257,
            "name": "four",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 260,
            "end": 287,
            "callee": {
              "type": "Identifier",
              "start": 264,
              "end": 285,
              "name": "TypeAliasForSomeClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 297,
            "name": "five",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 300,
            "end": 335,
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 333,
              "name": "TypeAliasForSomeClassNotFound",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 337,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 344,
            "name": "six",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 347,
            "end": 355,
            "name": "someType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 383,
      "expression": {
        "type": "CallExpression",
        "start": 357,
        "end": 382,
        "callee": {
          "type": "Identifier",
          "start": 357,
          "end": 372,
          "name": "acceptsSomeType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 373,
            "end": 381,
            "name": "someType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 418,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 417,
        "callee": {
          "type": "Identifier",
          "start": 384,
          "end": 399,
          "name": "acceptsSomeType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 400,
            "end": 416,
            "name": "someTypeNotFound",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
