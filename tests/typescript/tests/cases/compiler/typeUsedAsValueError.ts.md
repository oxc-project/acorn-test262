__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 20,
        "end": 24
      },
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 42,
        "end": 46
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeAliasForSomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 74
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 86
        },
        "typeArguments": null,
        "start": 77,
        "end": 86
      },
      "declare": false,
      "start": 48,
      "end": 87
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someType",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 101
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 109,
                "end": 115
              },
              "start": 107,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 106,
            "end": 115
          }
        ],
        "start": 104,
        "end": 117
      },
      "declare": false,
      "start": 88,
      "end": 118
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptsSomeType",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 144
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "someType",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 156
              },
              "typeArguments": null,
              "start": 148,
              "end": 156
            },
            "start": 146,
            "end": 156
          },
          "start": 145,
          "end": 156
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 158,
        "end": 162
      },
      "expression": false,
      "start": 120,
      "end": 162
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 171
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Interface",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 183
          },
          "definite": false,
          "start": 168,
          "end": 183
        }
      ],
      "declare": false,
      "start": 164,
      "end": 184
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 192
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "InterfaceNotFound",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 212
          },
          "definite": false,
          "start": 189,
          "end": 212
        }
      ],
      "declare": false,
      "start": 185,
      "end": 213
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "three",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeAliasForSomeClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 247
          },
          "definite": false,
          "start": 218,
          "end": 247
        }
      ],
      "declare": false,
      "start": 214,
      "end": 248
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "four",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 257
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeAliasForSomeClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 285
            },
            "typeArguments": null,
            "arguments": [],
            "start": 260,
            "end": 287
          },
          "definite": false,
          "start": 253,
          "end": 287
        }
      ],
      "declare": false,
      "start": 249,
      "end": 288
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "five",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 297
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeAliasForSomeClassNotFound",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 333
            },
            "typeArguments": null,
            "arguments": [],
            "start": 300,
            "end": 335
          },
          "definite": false,
          "start": 293,
          "end": 335
        }
      ],
      "declare": false,
      "start": 289,
      "end": 336
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "six",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 344
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "someType",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 355
          },
          "definite": false,
          "start": 341,
          "end": 355
        }
      ],
      "declare": false,
      "start": 337,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptsSomeType",
          "optional": false,
          "typeAnnotation": null,
          "start": 357,
          "end": 372
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "someType",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 381
          }
        ],
        "optional": false,
        "start": 357,
        "end": 382
      },
      "directive": null,
      "start": 357,
      "end": 383
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptsSomeType",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "someTypeNotFound",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 416
          }
        ],
        "optional": false,
        "start": 384,
        "end": 417
      },
      "directive": null,
      "start": 384,
      "end": 418
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 418
}
```
