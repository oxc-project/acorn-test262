__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 14,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 9,
                "end": 14,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 9,
                  "end": 12
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 17,
            "end": 19,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 21,
      "end": 76,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 28,
        "end": 76,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 45,
          "name": "register",
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
            "start": 46,
            "end": 55,
            "name": "data",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 55,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 57,
          "end": 76,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 61,
              "end": 74,
              "expression": {
                "type": "CallExpression",
                "start": 61,
                "end": 73,
                "callee": {
                  "type": "MemberExpression",
                  "start": 61,
                  "end": 67,
                  "object": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 67,
                    "name": "push",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 68,
                    "end": 72,
                    "name": "data",
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
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
  "end": 46,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "register",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "register",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 29,
        "value": "./",
        "raw": "\"./\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 45,
        "callee": {
          "type": "Identifier",
          "start": 31,
          "end": 39,
          "name": "register",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 40,
            "end": 44,
            "value": "ok",
            "raw": "\"ok\""
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 27,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 26,
        "value": "./register",
        "raw": "\"./register\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 28,
      "end": 52,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 51,
        "value": "./data1",
        "raw": "\"./data1\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 53,
      "end": 88,
      "exported": {
        "type": "Identifier",
        "start": 65,
        "end": 72,
        "name": "aliased",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 87,
        "value": "./data1",
        "raw": "\"./data1\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
