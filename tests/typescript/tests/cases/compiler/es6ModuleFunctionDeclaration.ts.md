__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 25
        },
        "expression": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 39
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 42,
        "end": 45
      },
      "expression": false,
      "start": 26,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 49
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 46,
        "end": 51
      },
      "directive": null,
      "start": 46,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 57
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 53,
        "end": 59
      },
      "directive": null,
      "start": 53,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 81
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 108
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 111,
                  "end": 118
                },
                "expression": false,
                "start": 95,
                "end": 118
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 88,
              "end": 118
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 139,
                "end": 146
              },
              "expression": false,
              "start": 123,
              "end": 146
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 154
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 151,
                "end": 156
              },
              "directive": null,
              "start": 151,
              "end": 157
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 166
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 162,
                "end": 168
              },
              "directive": null,
              "start": 162,
              "end": 169
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 178
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 174,
                "end": 180
              },
              "directive": null,
              "start": 174,
              "end": 181
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 190
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 186,
                "end": 192
              },
              "directive": null,
              "start": 186,
              "end": 193
            }
          ],
          "start": 82,
          "end": 195
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 69,
        "end": 195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 195
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 235
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 238,
                "end": 245
              },
              "expression": false,
              "start": 222,
              "end": 245
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 215,
            "end": 245
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 263
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 266,
              "end": 273
            },
            "expression": false,
            "start": 250,
            "end": 273
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 281
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 278,
              "end": 283
            },
            "directive": null,
            "start": 278,
            "end": 284
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 293
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 289,
              "end": 295
            },
            "directive": null,
            "start": 289,
            "end": 296
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 305
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 301,
              "end": 307
            },
            "directive": null,
            "start": 301,
            "end": 308
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 317
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 313,
              "end": 319
            },
            "directive": null,
            "start": 313,
            "end": 320
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 327
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 332
                },
                "optional": false,
                "computed": false,
                "start": 325,
                "end": 332
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 325,
              "end": 334
            },
            "directive": null,
            "start": 325,
            "end": 335
          }
        ],
        "start": 209,
        "end": 337
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 196,
      "end": 337
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 337
}
```
