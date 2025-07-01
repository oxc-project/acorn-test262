__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "function1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 40
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 54,
                    "end": 61
                  },
                  "expression": false,
                  "start": 43,
                  "end": 61
                },
                "definite": false,
                "start": 31,
                "end": 61
              }
            ],
            "declare": false,
            "start": 27,
            "end": 61
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "function2",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 92
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
                "start": 95,
                "end": 103
              },
              "expression": false,
              "start": 74,
              "end": 103
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 67,
            "end": 103
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "function3",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 127
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "function1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 149
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 140,
                    "end": 151
                  },
                  "directive": null,
                  "start": 140,
                  "end": 152
                }
              ],
              "start": 130,
              "end": 158
            },
            "expression": false,
            "start": 109,
            "end": 158
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "function4",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 182
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
              "start": 185,
              "end": 193
            },
            "expression": false,
            "start": 164,
            "end": 193
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "function3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 223
                  },
                  "definite": false,
                  "start": 210,
                  "end": 223
                }
              ],
              "declare": false,
              "start": 206,
              "end": 224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 199,
            "end": 224
          }
        ],
        "start": 21,
        "end": 226
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
