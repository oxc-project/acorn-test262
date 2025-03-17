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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "name": "foob",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 30,
              "value": "a",
              "raw": "\"a\""
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 68,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 41,
        "end": 68,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 61,
                    "name": "foob",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 63,
                    "end": 66,
                    "value": "b",
                    "raw": "\"b\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 133,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "value": "./items",
        "raw": "\"./items\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 31,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 45,
        "name": "IFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 46,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
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
      "start": 68,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 81,
        "name": "nFoo",
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
          "start": 82,
          "end": 89,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 89,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 89,
                "name": "IFoo",
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
        "start": 91,
        "end": 93,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 104,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 103,
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 100,
          "name": "nFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "name": "q",
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
      "start": 124,
      "end": 132,
      "expression": {
        "type": "CallExpression",
        "start": 124,
        "end": 131,
        "callee": {
          "type": "Identifier",
          "start": 124,
          "end": 128,
          "name": "nFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "B",
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
  "sourceType": "module",
  "hashbang": null
}
```
