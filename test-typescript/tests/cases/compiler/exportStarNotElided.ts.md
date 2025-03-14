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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "r",
            "optional": false,
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
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 17,
            "end": 19,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 21,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 28,
        "end": 76,
        "async": false,
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
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 68,
                    "end": 72,
                    "decorators": [],
                    "name": "data",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 61,
                  "end": 67,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "r",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 67,
                    "decorators": [],
                    "name": "push",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 45,
          "decorators": [],
          "name": "register",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 46,
            "end": 55,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 55,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              }
            }
          }
        ]
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
  "end": 46,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 29,
        "raw": "\"./\"",
        "value": "./"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "register",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "register",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 45,
        "arguments": [
          {
            "type": "Literal",
            "start": 40,
            "end": 44,
            "raw": "\"ok\"",
            "value": "ok"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 31,
          "end": 39,
          "decorators": [],
          "name": "register",
          "optional": false
        },
        "optional": false
      }
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
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 26,
        "raw": "\"./register\"",
        "value": "./register"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 28,
      "end": 52,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 51,
        "raw": "\"./data1\"",
        "value": "./data1"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 53,
      "end": 88,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 65,
        "end": 72,
        "decorators": [],
        "name": "aliased",
        "optional": false
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 87,
        "raw": "\"./data1\"",
        "value": "./data1"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
