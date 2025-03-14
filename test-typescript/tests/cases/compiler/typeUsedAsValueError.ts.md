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
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 24,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "Interface",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 46,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 46,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "decorators": [],
        "name": "SomeClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 87,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 74,
        "decorators": [],
        "name": "TypeAliasForSomeClass",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 77,
        "end": 86,
        "typeName": {
          "type": "Identifier",
          "start": 77,
          "end": 86,
          "decorators": [],
          "name": "SomeClass",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 88,
      "end": 118,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 101,
        "decorators": [],
        "name": "someType",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 109,
                "end": 115
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 162,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 162,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 144,
        "decorators": [],
        "name": "acceptsSomeType",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 156,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "someType",
                "optional": false
              }
            }
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 171,
            "decorators": [],
            "name": "one",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 174,
            "end": 183,
            "decorators": [],
            "name": "Interface",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 192,
            "decorators": [],
            "name": "two",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 195,
            "end": 212,
            "decorators": [],
            "name": "InterfaceNotFound",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 223,
            "decorators": [],
            "name": "three",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 226,
            "end": 247,
            "decorators": [],
            "name": "TypeAliasForSomeClass",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 257,
            "decorators": [],
            "name": "four",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 260,
            "end": 287,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 264,
              "end": 285,
              "decorators": [],
              "name": "TypeAliasForSomeClass",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 297,
            "decorators": [],
            "name": "five",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 300,
            "end": 335,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 304,
              "end": 333,
              "decorators": [],
              "name": "TypeAliasForSomeClassNotFound",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 344,
            "decorators": [],
            "name": "six",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 347,
            "end": 355,
            "decorators": [],
            "name": "someType",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 383,
      "expression": {
        "type": "CallExpression",
        "start": 357,
        "end": 382,
        "arguments": [
          {
            "type": "Identifier",
            "start": 373,
            "end": 381,
            "decorators": [],
            "name": "someType",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 357,
          "end": 372,
          "decorators": [],
          "name": "acceptsSomeType",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 418,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 417,
        "arguments": [
          {
            "type": "Identifier",
            "start": 400,
            "end": 416,
            "decorators": [],
            "name": "someTypeNotFound",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 384,
          "end": 399,
          "decorators": [],
          "name": "acceptsSomeType",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
