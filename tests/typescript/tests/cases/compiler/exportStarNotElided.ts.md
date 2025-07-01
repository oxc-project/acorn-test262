__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 9,
                  "end": 12
                },
                "start": 9,
                "end": 14
              },
              "start": 7,
              "end": 14
            },
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 17,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "register",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 45
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              },
              "start": 50,
              "end": 55
            },
            "start": 46,
            "end": 55
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "push",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 67
                  },
                  "optional": false,
                  "computed": false,
                  "start": 61,
                  "end": 67
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 72
                  }
                ],
                "optional": false,
                "start": 61,
                "end": 73
              },
              "directive": null,
              "start": 61,
              "end": 74
            }
          ],
          "start": 57,
          "end": 76
        },
        "expression": false,
        "start": 28,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 21,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "register",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "register",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 25,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "register",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 40,
            "end": 44
          }
        ],
        "optional": false,
        "start": 31,
        "end": 45
      },
      "directive": null,
      "start": 31,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./register",
        "raw": "\"./register\"",
        "start": 14,
        "end": 26
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./data1",
        "raw": "\"./data1\"",
        "start": 42,
        "end": 51
      },
      "attributes": [],
      "exportKind": "value",
      "start": 28,
      "end": 52
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "aliased",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 72
      },
      "source": {
        "type": "Literal",
        "value": "./data1",
        "raw": "\"./data1\"",
        "start": 78,
        "end": 87
      },
      "attributes": [],
      "exportKind": "value",
      "start": 53,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
