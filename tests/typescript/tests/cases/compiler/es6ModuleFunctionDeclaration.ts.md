__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 25,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 25,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 45,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 51,
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 49,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 53,
        "end": 59,
        "callee": {
          "type": "Identifier",
          "start": 53,
          "end": 57,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 192,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 69,
        "end": 192,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 78,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 79,
          "end": 192,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 85,
              "end": 115,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 92,
                "end": 115,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 108,
                  "end": 115,
                  "body": []
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "FunctionDeclaration",
              "start": 120,
              "end": 143,
              "id": {
                "type": "Identifier",
                "start": 129,
                "end": 133,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 143,
                "body": []
              },
              "expression": false
            },
            {
              "type": "ExpressionStatement",
              "start": 148,
              "end": 154,
              "expression": {
                "type": "CallExpression",
                "start": 148,
                "end": 153,
                "callee": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 151,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 159,
              "end": 166,
              "expression": {
                "type": "CallExpression",
                "start": 159,
                "end": 165,
                "callee": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 163,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 171,
              "end": 178,
              "expression": {
                "type": "CallExpression",
                "start": 171,
                "end": 177,
                "callee": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 175,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 183,
              "end": 190,
              "expression": {
                "type": "CallExpression",
                "start": 183,
                "end": 189,
                "callee": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 187,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "directive": null
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 193,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 202,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 203,
        "end": 331,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 209,
            "end": 239,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 216,
              "end": 239,
              "id": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 232,
                "end": 239,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 244,
            "end": 267,
            "id": {
              "type": "Identifier",
              "start": 253,
              "end": 257,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 260,
              "end": 267,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 272,
            "end": 278,
            "expression": {
              "type": "CallExpression",
              "start": 272,
              "end": 277,
              "callee": {
                "type": "Identifier",
                "start": 272,
                "end": 275,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 283,
            "end": 290,
            "expression": {
              "type": "CallExpression",
              "start": 283,
              "end": 289,
              "callee": {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 302,
            "expression": {
              "type": "CallExpression",
              "start": 295,
              "end": 301,
              "callee": {
                "type": "Identifier",
                "start": 295,
                "end": 299,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 307,
            "end": 314,
            "expression": {
              "type": "CallExpression",
              "start": 307,
              "end": 313,
              "callee": {
                "type": "Identifier",
                "start": 307,
                "end": 311,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 319,
            "end": 329,
            "expression": {
              "type": "CallExpression",
              "start": 319,
              "end": 328,
              "callee": {
                "type": "MemberExpression",
                "start": 319,
                "end": 326,
                "object": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 326,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
