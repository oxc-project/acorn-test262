__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 32,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 30,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "foob",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 30,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 68,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 41,
        "end": 68,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 68,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 51,
              "end": 68,
              "properties": [
                {
                  "type": "Property",
                  "start": 57,
                  "end": 66,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 61,
                    "decorators": [],
                    "name": "foob",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 63,
                    "end": 66,
                    "raw": "\"b\"",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "raw": "\"./items\"",
        "value": "./items",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 11,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 31,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 46,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 45,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 93,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 93,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 81,
        "decorators": [],
        "name": "nFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 82,
          "end": 89,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 89,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 89,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 89,
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 104,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 103,
        "arguments": [
          {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 100,
          "decorators": [],
          "name": "nFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 132,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 124,
        "end": 131,
        "arguments": [
          {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 124,
          "end": 128,
          "decorators": [],
          "name": "nFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
