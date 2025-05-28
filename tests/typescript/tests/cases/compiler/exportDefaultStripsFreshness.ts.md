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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "foob",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 30,
              "value": "a",
              "raw": "\"a\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 68,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 61,
                    "decorators": [],
                    "name": "foob",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 63,
                    "end": 66,
                    "value": "b",
                    "raw": "\"b\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
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
  "end": 132,
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
          "local": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "nFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 89,
                "decorators": [],
                "name": "IFoo",
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
        "start": 91,
        "end": 93,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "nFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "nFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
