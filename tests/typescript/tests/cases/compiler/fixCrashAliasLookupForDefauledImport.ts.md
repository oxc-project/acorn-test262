__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 33,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 15,
          "end": 27,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 16,
              "end": 26,
              "name": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 30,
          "end": 32,
          "members": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "value": "./input",
        "raw": "\"./input\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 42,
        "end": 45,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 58,
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 58,
                "decorators": [],
                "name": "Foo",
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
        "start": 60,
        "end": 77,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 66,
            "end": 75,
            "argument": {
              "type": "Literal",
              "start": 73,
              "end": 74,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 101,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 100,
        "callee": {
          "type": "Identifier",
          "start": 79,
          "end": 82,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 83,
            "end": 99,
            "expression": {
              "type": "Literal",
              "start": 83,
              "end": 84,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 91,
                "end": 99,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 92,
                    "end": 98
                  }
                ]
              }
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
