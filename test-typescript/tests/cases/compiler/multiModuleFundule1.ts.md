__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "C",
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
          "start": 11,
          "end": 20,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 61,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 59,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 59,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 58,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 57,
                    "end": 58,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 104,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 77,
            "end": 102,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 84,
              "end": 102,
              "id": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 102,
                "body": []
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 129,
            "end": 137,
            "callee": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 135,
                "end": 136,
                "value": 2,
                "raw": "2"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 196,
            "end": 203,
            "callee": {
              "type": "MemberExpression",
              "start": 196,
              "end": 201,
              "object": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 198,
                "end": 201,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
